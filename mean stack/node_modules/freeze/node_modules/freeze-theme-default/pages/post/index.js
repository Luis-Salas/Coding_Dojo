var template = require('view-engine').load(require.resolve('./template.rhtml'));

exports.render = function render(data) {
    return template.stream(data);
};