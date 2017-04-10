var viewEngine = require('view-engine');
var nodePath = require('path');
var raptorOptimizer = require('raptor-optimizer');

viewEngine.configure({
    engines: {
        'view-engine-raptor': {
            extensions: ['rhtml']
            // Any additional config...
        }
    }
});

module.exports = function createGenerator(site, util) {
    var outputDir = site.outputDir;
    var staticDir = nodePath.join(outputDir, 'static');

    var plugins = {};

    if (site.options.isPublic) {
        raptorOptimizer.configure({
            fileWriter: {
                outputDir: staticDir,
                urlPrefix: '/static',
                checksumsEnabled: true
            },
            plugins: plugins,
            bundlingEnabled: true,
            transforms: [
                'raptor-optimizer-minify-css',
                'raptor-optimizer-minify-js',
                'raptor-optimizer-resolve-css-urls'
            ]
        });
    } else {
        raptorOptimizer.configure({
            fileWriter: {
                outputDir: staticDir,
                urlPrefix: '/static',
                checksumsEnabled: false
            },
            plugins: plugins,
            bundlingEnabled: false,
            transforms: [
                'raptor-optimizer-resolve-css-urls'
            ]
        });    
    }
    

    return {
        before: function(callback) {
            callback();
        },

        after: function(callback) {
            callback();
        },

        generatePost: function(post, callback) {
            return require('./pages/post').render({
                site: site,
                post: post,
                generator: this
            });
        },

        generatePage: function(page, callback) {
            return require('./pages/page').render({
                site: site,
                page: page,
                generator: this
            });
        },

        generateIndex: function(callback) {
            return require('./pages/index').render({
                site: site,
                generator: this
            });
        },

        generateArchive: function(callback) {
            return require('./pages/archive').render({
                site: site,
                generator: this
            });
        },

        generatePostCategory: function(postCategory, callback) {
            return require('./pages/category').render({
                site: site,
                postCategory: postCategory,
                generator: this
            });
        }
    };
};