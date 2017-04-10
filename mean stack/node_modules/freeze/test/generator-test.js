'use strict';
var chai = require('chai');
chai.config.includeStack = true;

require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');
var raptorAsync = require('raptor-async');

var sites = {};

xdescribe('freeze/generator' , function() {

    before(function(done) {
        var loader = require('../lib/loader');


        raptorAsync.parallel({
            testBlog: function(callback) {
                loader.load(nodePath.join(__dirname, 'test-blog'), {
                    includeUnpublished: true
                }, callback);
            },
            testBlogPublic: function(callback) {
                loader.load(nodePath.join(__dirname, 'test-blog'), {
                    includeUnpublished: false
                }, callback);
            }
        },
        function(err, results) {
            if (err) {
                return done(err);
            }

            sites = results;
            done();
        });
    });

    beforeEach(function(done) {
        done();
    });

    it('should generate the site correctly', function(done) {
        var site = sites.testBlog;
        var generator = require('../lib/generator');
        generator.generate(site, function(err) {
            if (err) {
                return done(err);
            }

            done();
        });
    });
});