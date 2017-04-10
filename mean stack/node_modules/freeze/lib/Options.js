function Options(options) {
    options = options || {};
    this.isPublic = options.isPublic === true;
}

Options.prototype = {
};

module.exports = Options;