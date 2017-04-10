var express = require('express');
var app = express();
var loader = require('./loader');
var generator = require('./generator');
var nodePath = require('path');
var port = 8080;

var dir = process.cwd();

var args = require('raptor-args').createParser({
        '--public': 'boolean'
    })
    .parse();

var startTime = Date.now();
console.log('Generating site...');

var loadOptions = {
    isPublic: args.public === true
};



loader.load(dir, loadOptions, function(err, site) {
    if (err) {
        console.error('Unable to load site data. Error: ' + (err.stack || err));
        process.exit(1);
        return;
    }
    var outputDir = site.outputDir || nodePath.join(site.dir, 'website-draft');
    app.use('/', express.static(outputDir));

    site.url = 'http://localhost:8080/';

    generator.generate(site, function(err) {

        if (err) {
            console.log('Failed to generate site. Error: ' + (err.stack || err));
            process.exit(1);
        } else {
            console.log('Site generated in ' + (Date.now() - startTime) + 'ms');
        }
        
        app.listen(port, function() {
            console.log('Listening on port %d', port);
            console.log('\nTo view your blog:\nhttp://localhost:8080/');

            if (process.send) {
                process.send('online');
            }
        });
    });
});