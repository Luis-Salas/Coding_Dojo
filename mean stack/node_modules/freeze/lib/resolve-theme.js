var resolve = require('resolve');

module.exports = function resolveTheme(themeName, from) {
    var themeModulePath;
    try {
            themeModulePath = resolve.sync(themeName, { basedir: from });
    } catch(e) {
        try {
            themeModulePath = resolve.sync(themeName, { basedir: __dirname });    
        } catch(e) {
            throw new Error('Theme module not found: ' + themeName + ' - Has it been installed using "npm install ' + themeName + '"?');
        }
    }
    return themeModulePath;
        
};