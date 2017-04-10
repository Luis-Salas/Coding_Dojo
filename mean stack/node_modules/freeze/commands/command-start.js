var browserRefresh = require('browser-refresh');
var nodePath = require('path');
var fs = require('fs');
var resolve = require('resolve');
var resolveTheme = require('../lib/resolve-theme');

module.exports = {
    usage: 'Usage: $0 $commandName [dir]',

    options: {
        'public': {
            description: 'Generate the public version of the website (include drafts)',
            type: 'boolean'
        },
        'watch-theme': {
            description: 'Watch the theme directory for changes',
            type: 'boolean',
            default: true
        }
    },

    validate: function(args, rapido) {
        var dir = args._[0];
        if (dir) {
            dir = nodePath.resolve(process.cwd(), dir);
        }
        else {
            dir = process.cwd();
        }
        
        return {
            dir: dir,
            watchTheme: args['watch-theme'] === true,
            isPublic: args.public === true
        };
    },

    run: function(args, config, rapido) {
        var dir = args.dir;

        var watch = [dir];

        if (args.watchTheme) {
            var siteFile = nodePath.join(dir, 'site.json');
            var siteMeta = JSON.parse(fs.readFileSync(siteFile, 'utf8'));
            var activeTheme = siteMeta.activeTheme;
            var themeModulePath = resolveTheme(activeTheme, dir);
            var themeDir = nodePath.dirname(themeModulePath);
            watch.push(themeDir);
        }

        var serverArgs = [];

        if (args.isPublic) {
            serverArgs.push('--public');
        }
        
        browserRefresh.start({
            script: require.resolve('../lib/server'),
            args: serverArgs,
            delay: 0,
            ignore: ['/website-draft','/node_modules', '.*', '*.rhtml.js'],
            watch: watch
        });
    }
};
