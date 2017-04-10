var fs = require('fs');
var shortstop = require('shortstop');
var nodePath = require('path');
var ok = require('assert').ok;
var mkdirp = require('mkdirp');
var async = require('async');
var Logger = require('./Logger');
var logger = new Logger();
var jsonminify = require('jsonminify');
var markdownRenderer = require('./markdown-renderer');

exports.Collection = require('./Collection');
exports.walk = require('./walk');
exports.MarkdownFile = require('./MarkdownFile');

exports.readJsonFile = function(path, callback) {

    var dirname = nodePath.dirname(path);
    

    var resolver = shortstop.create();
    
    resolver.use('path', function resolve(value) {
        return nodePath.resolve(dirname, value);
    });

    resolver.use('markdown', function resolve(value) {
        var path = nodePath.resolve(dirname, value);
        var markdown = fs.readFileSync(path, 'utf8');
        return markdownRenderer.render(markdown);
    });


    fs.readFile(path, 'utf8', function(err, json) {
        if (err) {
            return callback(err);
        }

        var o;

        try {
            o = JSON.parse(jsonminify(json));
        } catch(e) {
            return callback(new Error('Unable to parse JSON file "' + path + '". Exception: ' + (e.stack || e)));
        }

        resolver.resolve(o, function (err, o) {
            if (err) {
                return callback(err);
            }

            callback(null, o);
        });
    });
};

exports.writeFile = function(outputFile, input, callback) {
    logger.info('Writing file: ' + outputFile);
    ok(input != null, 'input is required');
    ok(typeof outputFile === 'string', 'output file should be a string path');
    ok(typeof callback === 'function', 'callback should be a function');

    var outDir = nodePath.dirname(outputFile);

    var stack = new Error().stack;

    mkdirp(outDir, function(err) {
        if (err) {
            callback(err);
        }

        if (input.pipe) {
            var outStream = fs.createWriteStream(outputFile, {encoding: 'utf8'});
            input
                .pipe(outStream)
                .on('error', function(e) {
                    callback(e);
                })
                .on('close', function() {
                    callback();
                });

            if (input.paused) {
                input.resume();    
            }
            

        } else {
            fs.writeFile(outputFile, input, {encoding: 'utf8'}, callback);
        }
    });
};

exports.safeFilename = function(str) {
    return str.replace(/[^A-Za-z0-9_]+/g, '-');
};



exports.queue = function createQueue(callback) {
    ok(typeof callback === 'function');
    
    var error = null;

    var queue = async.queue(
        function (task, cb) {
            
            task(function(err) {
                if (err) {
                    queue.kill(); // Don't accept any more tasks
                    error = err;
                    callback(err);
                }

                cb();
            });
        },
        5 /* concurrency */);



    var drained = false;
    queue.drain = function() {
        if (error || drained) {
            return;
        }
        drained = true;
        callback();
    };

    return queue;
};

exports.lastModified = function(file, callback) {
    fs.stat(file, function(err, stat) {
        if (err) {
            callback(null, -1);
            return;
        }

        callback(null, stat.mtime.getTime());
    });
};