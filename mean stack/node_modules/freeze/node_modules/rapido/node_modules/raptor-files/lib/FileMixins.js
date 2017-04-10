function buildUrl(filePath, isDir) {
    var url = encodeURI(filePath.replace(/\\/g, '/'));
    if (!url.startsWith('/')) {
        url = '/' + url;
    }
    if (isDir && !url.endsWith("/")) {
        url = url + "/";
    }
    
    return "file://" + url;
}

module.exports = {
    toURL: function() {
        return buildUrl(this.getAbsolutePath(), this.isDirectory());
    },
    __File: true
};