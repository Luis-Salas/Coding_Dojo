'use strict';
var chai = require('chai');
chai.config.includeStack = true;

require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');
var raptorAsync = require('raptor-async');

var sites = {};

xdescribe('freeze/loader' , function() {

    before(function(done) {
        var loader = require('../lib/loader');

        raptorAsync.parallel({
            testBlog: function(callback) {
                loader.load(nodePath.join(__dirname, 'test-blog'), {
                    isPublic: false
                }, callback);
            },
            testBlogPublic: function(callback) {
                loader.load(nodePath.join(__dirname, 'test-blog'), {
                    isPublic: true
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

    it('should load site meta', function() {
        var site = sites.testBlog;
        expect(site.subtitle).to.equal('Subtitle for Foobar');
        expect(site.description).to.equal('Description for Foobar');
        expect(site.author).to.equal('psteeleidem');
        expect(site.outputDir).to.equal(nodePath.join(__dirname, 'test-blog/public'));
    });

    it('should load authors', function() {
        var site = sites.testBlog;
        expect(site.authors.all.length).to.equal(2);
        expect(site.authors.byId.jane.email).to.equal('jane@doe.com');
        expect(site.authors.byId.john.email).to.equal('john@doe.com');
        expect(site.authors.byId.invalid).to.equal(undefined);
    });

    it('should load pages', function() {
        var site = sites.testBlog;
        expect(site.pages.byId['/about-me'].title).to.equal('About Me');
        expect(site.pages.byId['/about-me'].comments).to.equal(true);
        expect(site.pages.byId['/about-me'].markdownFiles.hasOwnProperty('index')).to.equal(true);
    });

    it('should load posts', function() {
        var site = sites.testBlog;
        expect(site.posts.all.length).to.equal(2);

        expect(site.posts.byId['first-post'].status).to.equal('published');
        expect(site.posts.byId['first-post'].title).to.equal('Title for First Post');
        expect(site.posts.byId['first-post'].hasOwnProperty('markdownFile')).to.equal(true);
        expect(site.posts.byId['first-post'].categories).to.deep.equal(['first', 'intro']);
        expect(site.posts.byId['first-post'].comments).to.equal(true);
        expect(site.posts.byId['first-post'].date.getFullYear()).to.equal(2013);
        expect(site.posts.byId['first-post'].date.getMonth()).to.equal(1);
        expect(site.posts.byId['first-post'].date.getDate()).to.equal(2);

        expect(site.posts.byId['second-post'].status).to.equal('draft');
        expect(site.posts.byId['second-post'].title).to.equal('Title for Second Post');
        expect(site.posts.byId['second-post'].hasOwnProperty('markdownFile')).to.equal(true);
        expect(site.posts.byId['second-post'].categories).to.deep.equal(['second']);
        expect(site.posts.byId['second-post'].comments).to.equal(false);
        expect(site.posts.byId['second-post'].date.getFullYear()).to.equal(new Date().getFullYear());
        expect(site.posts.byId['second-post'].date.getMonth()).to.equal(new Date().getMonth());
        expect(site.posts.byId['second-post'].date.getDate()).to.equal(new Date().getDate());
    });

    it('should load public posts correctly', function() {
        var site = sites.testBlogPublic;
        expect(site.posts.all.length).to.equal(1);

        expect(site.posts.byId['first-post'].status).to.equal('published');
        expect(site.posts.byId['first-post'].title).to.equal('Title for First Post');
        expect(site.posts.byId['first-post'].hasOwnProperty('markdownFile')).to.equal(true);
        expect(site.posts.byId['first-post'].categories).to.deep.equal(['first', 'intro']);
        expect(site.posts.byId['first-post'].comments).to.equal(true);
        expect(site.posts.byId['first-post'].date.getFullYear()).to.equal(2013);
        expect(site.posts.byId['first-post'].date.getMonth()).to.equal(1);
        expect(site.posts.byId['first-post'].date.getDate()).to.equal(2);
    });
});