var template = require('view-engine').load(require.resolve('./template.rhtml'));

exports.render = function render(data) {
    var site = data.site;

    return template.stream({
        site: site,
        posts: site.posts.all,
        generator: data.generator
    });
};