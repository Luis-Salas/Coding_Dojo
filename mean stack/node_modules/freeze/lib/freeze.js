var loader = require('./loader');
var generator = require('./generator');

function generate(dir, options, callback) {
    if (arguments.length === 2) {
        callback = options;
        options = {};
    }
    
    loader.load(dir, options, function(err, db) {
        if (err) {
            return callback(err);
        }

        generator.generate(db, callback);
    });
    
}

exports.generate = generate;
exports.loader = loader;