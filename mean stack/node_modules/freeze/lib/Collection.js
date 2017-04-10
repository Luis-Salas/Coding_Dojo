var paginate = require('./paginate');
function Collection() {
    this.all = [];
    this.byId = {};
}

Collection.prototype = {
    add: function(id, o) {
        if (this.byId.hasOwnProperty(id)) {
            throw new Error('Already exists: ' + id);
        }

        this.byId[id] = o;
        this.all.push(o);
    },

    paginate: function(pageSize, comparator) {
        return paginate(pageSize, comparator);
    }
};

module.exports = Collection;
