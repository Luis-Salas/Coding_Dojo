var template = require('view-engine').load(require.resolve('./template.rhtml'));

var nodePath = require('path');

exports.render = function render(data) {

    var page = data.page;
    var optimizerCacheKey = 'page';

    var packagePaths = [
        require.resolve('./optimizer.json')
    ];

    page.files.forEach(function(file) {
        if (nodePath.basename(file) === 'optimizer.json') {
            optimizerCacheKey = 'page-' + page.name;
            packagePaths.push(file);
        }
    });

    data.packagePaths = packagePaths;
    data.optimizerCacheKey = optimizerCacheKey;

    return template.stream(data);
};