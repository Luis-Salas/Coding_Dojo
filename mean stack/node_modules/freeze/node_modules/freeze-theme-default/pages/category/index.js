var template = require('view-engine').load(require.resolve('./template.rhtml'));


function dateComparator(a, b) {
    a = a.date.getTime();
    b = b.date.getTime();

    return a - b;
}

exports.render = function render(data) {
    var site = data.site;
    var posts = data.postCategory.posts.all.concat([]);
    posts.sort(dateComparator);

    return template.stream({
        category: data.postCategory,
        site: site,
        posts: posts,
        generator: data.generator
    });
};