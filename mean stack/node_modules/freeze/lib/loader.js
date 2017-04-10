var Site = require('./Site');
var Options = require('./Options');
var dataLoaders = require('./data-loaders');
var nodePath = require('path');
var raptorAsync = require('raptor-async');
var util = require('./util');

exports.load = function(dir, options, callback) {
    if (arguments.length === 2) {
        callback = options;
        options = {};
    }

    options = new Options(options);

    dir = nodePath.resolve(process.cwd(), dir);
    var site = new Site(dir, options);

    var work = [];

    work.push(function(callback) {
        dataLoaders.loadDataLoaders(options.dataLoaders, site, callback);
    });

    raptorAsync.series(work, function(err) {
        if (err) {
            return callback(err);
        }

        callback(null, site);
    });

};