var ok = require('assert').ok;
var Logger = require('./Logger');

var EventEmitter = require('events').EventEmitter;

function Site(dir, options) {
    ok(dir, '"dir" is required');
    
    Site.$super.call(this);
    
    this.dir = dir;
    this.options = options || {};
    this.logger = new Logger();
}

Site.prototype = {

};

require('raptor-util').inherit(Site, EventEmitter);

module.exports = Site;