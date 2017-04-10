var freeze = require('../');

module.exports = {
    usage: 'Usage: $0 build',

    options: {
        'public': {
            description: 'Generate the public version of the website (include drafts)',
            type: 'boolean',
            default: true
        }
    },

    validate: function(args, rapido) {
        var dir = args._[0] || process.cwd();

        return {
            isPublic: args.public === true,
            dir: dir
        };
    },

    run: function(args, config, rapido) {

        var startTime = Date.now();
        console.log('Generating site...');

        var options = {
            isPublic: args.isPublic === true
        };

        freeze.generate(args.dir, options, function(err, result) {
            if (err) {
                console.log('Failed to generate site. Error: ' + (err.stack || err) + new Error().stack);
                process.exit(1);
            }

            var outputDir = result.outputDir;
            console.log('Site generated to "' + outputDir + '" in ' + (Date.now() - startTime) + 'ms');
        });
    }
};