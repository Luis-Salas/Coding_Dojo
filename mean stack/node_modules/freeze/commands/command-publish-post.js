var freeze = require('../');
var nodePath = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');

module.exports = {
    usage: 'Usage: $0 $commandName <message>',

    options: {
    },

    validate: function(args, rapido) {
        var dir = args._[0] || process.cwd();

        return {
            
            dir: dir
        };
    },

    run: function(args, config, rapido) {
        var options = {
            isPublic: false
        };

        freeze.loader.load(args.dir, options, function(err, site) {
            if (err) {
                console.error('Unable to publish post. Error: ' + (err.stack || err));
                process.exit(1);
            }
            
            var maxLen = -1;

            var drafts = site.posts.all.filter(function(post) {
                if (post.title.length > maxLen) {
                    maxLen = post.title.length;
                }

                return post.status === 'draft';
            });

            drafts.sort(function(a, b) {
                a = a.title.toLowerCase();
                b = b.title.toLowerCase();
                return a < b ? -1 : (a > b ? 1 : 0);
            });



            var menu = require('terminal-menu')({ width: maxLen, x: 4, y: 2 });
            menu.reset();
            menu.write('Choose a Post to Publish\n');
            menu.write('-------------------------\n');

            drafts.forEach(function(post) {
                menu.add(post.title);
            });
            
            menu.add('CANCEL');

            menu.on('select', function (label, i) {
                menu.close();

                if (label === 'CANCEL') {
                    return;
                }
                
                var post  = drafts[i];
                console.log('Publishing ' + post.title + '...');

                var publishedDir = nodePath.join(site.dir, 'posts/published');

                mkdirp(publishedDir, function(err, result) {
                    if (err) {
                        console.error('Unable to publish post. Error: ' + (err.stack || err));
                        process.exit(1);
                    }

                    var now = new Date();
                    var year = now.getFullYear();
                    var month = now.getMonth() + 1;
                    var day = now.getDate();

                    var targetFile = nodePath.join(publishedDir, year + '-' + month + '-' + day + '-' + post.name + '.md');
                    fs.renameSync(post.file, targetFile);
                });

            });
            menu.createStream().pipe(process.stdout);

        });
        
    }
};
