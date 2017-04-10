var nodePath = require('path');
var fs = require('fs');
var extend = require('raptor-util/extend');

module.exports = {
    usage: 'Usage: $0 create [blog-name]',

    options: {
        'overwrite': {
            type: 'boolean',
            describe: 'Overwrite existing files'
        }
    },

    validate: function(args, rapido) {
        var outputDir = args._[0];

        if (outputDir) {
            outputDir = nodePath.resolve(process.cwd(), outputDir);
        }

        return {
            outputDir: outputDir,
            overwrite: args.overwrite === true
        };
    },

    run: function(args, config, rapido) {
        var outputDir = args.outputDir;
        var overwrite = args.overwrite;
        var scaffoldDir = config['scaffold.blog.dir'];

        if (!scaffoldDir) {
            scaffoldDir = nodePath.join(__dirname, '../scaffolds/blog');
        }

        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();



        function padNum(num) {
            num = '' + num;
            if (num.length < 2) {
                num = '0' + num;
            }
            return num;
        }

        var today = year + '-' + padNum(month) + '-' + padNum(day);
        var input = {
            outputDir: outputDir || '.',
            author: 'John Doe',
            email: 'john.doe@johndoe.com',
            title: 'My Blog',
            subtitle: '',
            description: ''
        };

        return rapido.prompt({
                confirm: false,
                values: input,
                properties: {
                    outputDir: {
                        message: 'Invalid output directory',
                        type: 'string', 
                        description: 'Output directory',
                        required: true
                    }
                }
            })
            .then(function() {
                outputDir = nodePath.resolve(process.cwd(), input.outputDir);

                var siteJsonPath = nodePath.join(outputDir, 'site.json');
                if (fs.existsSync(siteJsonPath)) {
                    var siteMeta = require(siteJsonPath);
                    extend(input, siteMeta);

                    var author = siteMeta.author;
                    if (author) {
                        var authorMetaPath = nodePath.join(outputDir, 'authors', author + '.json');
                        if (fs.existsSync(authorMetaPath)) {
                            var authorMeta = require(authorMetaPath);
                            input.author = authorMeta.name || author;
                            input.email = authorMeta.email || input.email;
                        }
                    }
                }

                return rapido.prompt({
                    confirm: true,
                    values: input,
                    override: {
                        outputDir: outputDir
                    },
                    properties: {
                        outputDir: {
                            message: 'Invalid output directory',
                            type: 'string', 
                            description: 'Output directory',
                            required: true
                        },
                        author: {
                            message: 'Author is required',
                            type: 'string', 
                            description: 'Author',
                            required: true
                        },
                        email: {
                            type: 'string', 
                            description: 'Email',
                            required: false
                        },
                        title: {
                            message: 'Title is required',
                            type: 'string', 
                            description: 'Title',
                            required: true
                        },
                        subtitle: {
                            message: 'Subtitle is required',
                            type: 'string', 
                            description: 'Subtitle',
                            required: true
                        },
                        description: {
                            message: 'Description is required',
                            type: 'string', 
                            description: 'Description',
                            required: true
                        }
                    }
                });
            })
            .then(function() {
                
                var author = input.author;
                var title = input.title;
                var subtitle = input.subtitle;
                var description = input.description;
                var authorId = author.toLowerCase().replace(/[ ]/g, '-');
                var email = input.email;

                if (!title && author) {
                    title = author;
                }

                rapido.scaffold(
                    {
                        scaffoldDir: scaffoldDir,
                        outputDir: outputDir,
                        overwrite: args.overwrite === true,
                        data: {
                            author: author,
                            authorId: authorId,
                            title: title,
                            subtitle: subtitle,
                            description: description,
                            today: today,
                            year: year,
                            email: email
                        },
                        afterFile: function(outputFile) {
                            
                        },
                        beforeFile: function(outputFile, content) {
                            
                        }
                    });

                rapido.log.success('finished', 'Blog successfully written to "' + outputDir + '"!');
                rapido.log();
                rapido.log('To test your blog locally:');
                rapido.log.info('freeze start');
                rapido.log();
                rapido.log('To build your public blog:');
                rapido.log.info('freeze build');
                rapido.log();
                rapido.log('To create a new post:');
                rapido.log.info('freeze create post');
                rapido.log();
                rapido.log('To publish a draft post:');
                rapido.log.info('freeze publish post');
            });
    }
};