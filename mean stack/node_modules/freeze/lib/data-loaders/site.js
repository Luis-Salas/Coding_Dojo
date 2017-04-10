var nodePath = require('path');
var fs = require('fs');
var async = require('async');
var ok = require('assert').ok;
var extend = require('raptor-util').extend;
var resolve = require('resolve');
var resolveTheme = require('../resolve-theme');

require('raptor-ecma/es6');

module.exports = function(site, util, callback) {
    var siteFile = nodePath.join(site.dir, 'site.json');
    util.readJsonFile(siteFile, function(err, siteMeta) {
        if (err) {
            return callback(err);
        }

        extend(site, siteMeta);


        var activeTheme = site.activeTheme;
        var themeModulePath = resolveTheme(activeTheme, site.dir);
        site.themeModule = require(themeModulePath);
        site.themeDir = nodePath.dirname(themeModulePath);

        site.outputDir = site.options.isPublic ?
            site.outputDir :
            nodePath.join(site.dir, 'website-draft');


        site.outputDir = fs.realpathSync(site.outputDir);

        var authors = site.authors;

        site.authors = new util.Collection();

        if (authors) {
            Object.keys(authors).forEach(function(authorId) {
                var authorMeta = authors[authorId];
                site.authors.add(authorId, authorMeta);
            });
        }

        site.author = site.authors.byId[site.author] || site.author;

        callback();
    });
};