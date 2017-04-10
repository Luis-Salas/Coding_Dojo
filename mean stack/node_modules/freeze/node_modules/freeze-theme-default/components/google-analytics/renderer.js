var template = require('view-engine').load(require.resolve('./template.rhtml'));

exports.tag = {
    attributes: {
        'tracking-id': 'string',
        'domain': 'string'
    }
};

module.exports = function render(input, context) {
    if (input.trackingId && input.domain) {
        template.render(
            input,
            context);
    }
};