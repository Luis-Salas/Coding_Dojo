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

            var published = site.posts.all.filter(function(post) {
                if (post.title.length > maxLen) {
                    maxLen = post.title.length;
                }

                return post.status === 'published';
            });

            published.sort(function(a, b) {
                a = a.title.toLowerCase();
                b = b.title.toLowerCase();
                return a < b ? -1 : (a > b ? 1 : 0);
            });



            var menu = require('terminal-menu')({ width: maxLen, x: 4, y: 2 });
            menu.reset();
            menu.write('Choose a Post to Unpublish\n');
            menu.write('-------------------------\n');

            published.forEach(function(post) {
                menu.add(post.title);
            });
            
            menu.add('CANCEL');

            menu.on('select', function (label, i) {
                menu.close();

                if (label === 'CANCEL') {
                    return;
                }
                
                var post  = published[i];
                console.log('Unpublishing ' + post.title + '...');

                var draftsDir = nodePath.join(site.dir, 'posts/drafts');

                mkdirp(draftsDir, function(err, result) {
                    if (err) {
                        console.error('Unable to publish post. Error: ' + (err.stack || err));
                        process.exit(1);
                    }

                    var targetFile = nodePath.join(draftsDir, post.name + '.md');
                    fs.renameSync(post.file, targetFile);
                });

            });
            menu.createStream().pipe(process.stdout);

        });
        
    }
};
