var nodePath = require('path');
var fs = require('fs');
var async = require('async');
var ok = require('assert').ok;
var extend = require('raptor-util').extend;

var publishedRegExp = /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})-(.+)$/;

require('raptor-ecma/es6');

function dateComparatorDescending(a, b) {
    a = a.date.getTime();
    b = b.date.getTime();

    return b - a;
}

module.exports = function(site, util, callback) {
    ok(site && typeof site === 'object', '"site" expected');
    ok(util && typeof util === 'object', '"site" expected');
    ok(site.dir, 'site.dir expected');
    ok(typeof callback === 'function', 'callback function expected');

    var posts = site.posts = new util.Collection();
    var draftPosts = site.draftPosts = new util.Collection();
    var postCategories = site.postCategories = new util.Collection();

    site.on('afterLoad', function() {
        var authorsById = site.authors.byId;

        var allPosts = posts.all.concat(draftPosts.all);

        allPosts.forEach(function(post) {
            var authors = post.authors || post.author || site.author;
            delete post.authors;
            delete post.author;

            if (!Array.isArray(authors)) {
                authors = [authors];
            }

            authors = authors.map(function(authorId) {
                return authorsById[authorId] || authorId;
            });

            if (authors.length === 1) {
                post.author = authors[0];
            } else {
                post.authors = authors;
            }

            var contributors = post.contributors || post.contributor;
            delete post.contributors;
            delete post.contributor;

            if (!Array.isArray(contributors)) {
                contributors = [contributors];
            }

            contributors = contributors.map(function(authorId) {
                return authorsById[authorId] || authorId;
            });

            if (contributors.length === 1) {
                post.contributor = contributors[0];
            } else {
                post.contributors = contributors;
            }
        });
    });

    

    var error = null;

    var queue = async.queue(
        function (task, cb) {
            
            task(function(err) {
                if (err) {
                    queue.kill(); // Don't accept any more tasks
                    error = err;
                    callback(err);
                }

                cb();
            });
        },
        5 /* concurrency */);



    var drained = false;
    queue.drain = function() {
        if (error || drained) {
            return;
        }
        drained = true;
        site.posts.all.sort(dateComparatorDescending);
        callback();
    };

    

    var postsDir = nodePath.join(site.dir, 'posts');
    var publishedDir = nodePath.join(postsDir, 'published');
    var draftsDir = nodePath.join(postsDir, 'drafts');
    var pendingDir = nodePath.join(postsDir, 'pending');

    var walkDirs = [publishedDir, draftsDir, pendingDir];
    walkDirs = walkDirs.filter(function(dir) {
        return fs.existsSync(dir);
    });

    function getPostCategory(title, shouldAdd) {

        var name = util.safeFilename(title.toLowerCase());
        var postCategory = postCategories.byId[name];

        if (!postCategory) {
            postCategory = {
                title: title,
                name: name,
                site: site,
                posts: new util.Collection(),
                get postCount() {
                    return this.posts.all.length;
                }
            };

            if (shouldAdd !== false) {
                postCategories.add(name, postCategory);    

                postCategories.all.sort(function(a, b) {
                    a = a.title.toLowerCase();
                    b = b.title.toLowerCase();
                    return a < b ? -1 : (a > b ? 1 : 0);
                });
            }

            
        }

        return postCategory;
    }

    queue.push(function(callback) {
        util.walk(
            walkDirs,
            {
                file: function(file) {
                    if (file.startsWith('.')) {
                        return;
                    }

                    var status;
                    var published = false;
                    if (file.startsWith(publishedDir)) {
                        status = 'published';
                        published = true;
                    } else {
                        if (file.startsWith(draftsDir)) {
                            status = 'draft';
                        } else if (file.startsWith(pendingDir)) {
                            status = 'pending';
                        } else {
                            throw new Error('Illegal state while determining status for file: ' + file );
                        }
                    }

                    var basename = nodePath.basename(file);
                    var extname = nodePath.extname(basename);
                    var nameNoExt = basename.slice(0, 0-extname.length);

                    if (file.endsWith('.md')) {

                        var postName;
                        var date;

                        if (status === 'published' || status === 'pending') {
                            var matches = publishedRegExp.exec(nameNoExt);
                            if (!matches) {
                                throw new Error('Invalid post filename: ' + file);
                            }

                            var year = parseInt(matches[1], 10);
                            var month = parseInt(matches[2], 10);
                            var day = parseInt(matches[3], 10);

                            date = new Date(year, month-1, day);

                            postName = matches[4];
                        } else {
                            postName = nameNoExt;
                            date = new Date();
                        }

                        var post = {
                            name: postName,
                            files: [],
                            markdownFiles: {}
                        };
                        post.file = file;
                        post.date = date;
                        post.status = status;
                        post.files.push(file);
                        post.site = site;

                        var markdownFile = post.markdownFile = new util.MarkdownFile(file);

                        queue.push(function(callback) {
                            var index = queue.length();

                            markdownFile.loadFrontMatter(function(err, frontMatter) {
                                if (err) {
                                    return callback(err);
                                }

                                if (frontMatter) {
                                    extend(post, frontMatter);    
                                }

                                post.title = post.title || postName;

                                var addToCategory = false;

                                post.isPublished = post.status === 'published';

                                if (post.isPublished || site.options.isPublic === false) {
                                    posts.add(postName, post);
                                    addToCategory = true;
                                } else {
                                    draftPosts.add(postName, post);
                                }

                                var categories = post.categories || post.category;
                                delete post.categories;
                                delete post.category;

                                post.categories = [];

                                if (categories) {
                                    if (!Array.isArray(categories)) {
                                        categories = [categories];
                                    }

                                    categories.forEach(function(categoryTitle) {
                                        categoryTitle = categoryTitle.trim();

                                        var postCategory = getPostCategory(categoryTitle, post.isPublished === true);
                                        if (post.isPublished === true) {
                                            postCategory.posts.add(postName, post);    
                                        }

                                        post.categories.push(postCategory);
                                        post.categories.sort(function(a, b) {
                                            a = a.title.toLowerCase();
                                            b = b.title.toLowerCase();
                                            return a < b ? -1 : (a > b ? 1 : 0);
                                        });
                                    });
                                    
                                }

                                callback();
                            });
                        });
                    }
                }
            },
            function(err) {
                callback(err);
            });
    });
};