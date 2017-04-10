var util = require('../util');
var raptorAsync = require('raptor-async');
var ok = require('assert').ok;

var defaultDataLoaders = {
    site: {
        fn: require('./site'),
        config: {}
    },
    pages: {
        fn: require('./pages'),
        config: {}
    },
    posts: {
        fn: require('./posts'),
        config: {}
    }
};

function merge(target, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            if (!target.hasOwnProperty(k)) {
                target[k] = source[k];
            } else {
                if (target[k] && typeof target[k] === 'object' &&
                    source[k] && typeof source[k] === 'object') {
                    merge(target[k], source[k]);
                }
            }
        }
    }
}

function loadDataLoaders(dataLoaders, site, callback) {
    ok(site, '"site" is required');
    ok(typeof callback === 'function', '"callback" function is required');

    if (!dataLoaders) {
        dataLoaders = {};
    }

    merge(dataLoaders, defaultDataLoaders);

    var work = [];

    Object.keys(dataLoaders).forEach(function(dataLoaderName) {
        var dataLoader = dataLoaders[dataLoaderName];
        var fn = dataLoader.fn;
        var config = dataLoader.config || {};

        ok(fn != null, 'Plugin "fn" property is required');
        ok(typeof fn === 'function', 'Plugin "fn" property should be a function');

        work.push(function(callback) {
            fn(site, util, callback);
        });
    });

    raptorAsync.series(work, function(err) {
        if (err) {
            return callback(err);
        }

        site.emit('afterLoad');

        callback();
    });
}

exports.loadDataLoaders = loadDataLoaders;