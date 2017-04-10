var titleSummaryRegExp = /^\s*([^=\n]+)\s*[=]{4,}\s+([^]+?)(\n\{TOC\}|\n[#]|$)/i;
var titleBodyRegExp = /^\s*([^=\n]+)\s*[=]{3,}[=]+\s*([^=][^]*)\s*$/;

var frontMatter = require('front-matter');
var fs = require('fs');
var ok = require('assert').ok;
var markdownRenderer = require('./markdown-renderer');


function MarkdownFile(file) {
    this.file = file;
    this._cached = null;
}

MarkdownFile.prototype = {
    read: function(options, callback) {

        if (arguments.length === 1) {
            callback = options;
            options = {};
        }
        
        ok(typeof callback === 'function', 'callback should be a function');

        var summaryHtml;
        var summaryMarkdown;
        var attributes;

        var cached = this._cached;

        if (cached) {
            summaryMarkdown = cached.summaryMarkdown;
            summaryHtml = cached.summaryHtml;
            attributes = cached.attributes;
        }

        if (cached && options.renderBody !== true) {
            return callback(null, {
                summaryMarkdown: summaryMarkdown,
                summaryHtml: summaryHtml,
                frontMatter: attributes
            });
        }

        var _this = this;

        fs.readFile(this.file, 'utf8', function(err, data) {
            if (err) {
                return callback(err);
            }

            var fm;

            if (!cached || options.renderBody === true) {
                fm = frontMatter(data);
            }


            if (!cached) {
                attributes = fm.attributes || {};

                var titleSummaryMatches = titleSummaryRegExp.exec(fm.body);
                
                if (titleSummaryMatches) {
                    attributes.title = attributes.title || titleSummaryMatches[1];
                    if (titleSummaryMatches[2]) {
                        summaryMarkdown = titleSummaryMatches[2];
                        summaryHtml = markdownRenderer.render(titleSummaryMatches[2].trim());
                    }
                }

                cached = _this._cached = {};
                cached.attributes = attributes;
                cached.summaryHtml = summaryHtml;
                cached.summaryMarkdown = summaryMarkdown;
            }

            var bodyHtml;
            
            if (options.renderBody === true) {
                var titleBodyMatches = titleBodyRegExp.exec(fm.body);
                if (titleBodyMatches) {
                    var body = titleBodyMatches[2] || '';
                    bodyHtml = markdownRenderer.render(body);
                }
            }

            callback(null, {
                bodyHtml: bodyHtml,
                summaryMarkdown: summaryMarkdown,
                summaryHtml: summaryHtml,
                frontMatter: attributes
            });
        });
    },

    loadFrontMatter: function(callback) {
        this.read(function(err, data) {
            if (err) {
                return callback(err);
            }

            callback(null, data.frontMatter);
        });
    },

    

    readBodyHtml: function(callback) {
        
        this.read({renderBody: true}, function(err, data) {
            if (err) {
                return callback(err);
            }

            callback(null, data.bodyHtml);
        });
    },

    readSummaryHtml: function(callback) {
        this.read(function(err, data) {
            if (err) {
                return callback(err);
            }

            callback(null, data.summaryHtml);
        });
    }
};

module.exports = MarkdownFile;
