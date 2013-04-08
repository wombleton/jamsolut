var original = require.s.contexts._.Module.prototype.load;

require.s.contexts._.Module.prototype.load = function() {
    var args = [original];

    Array.prototype.push.apply(args, arguments);
    (function(fn) {
        this.map.url = this.map.url.replace(/^\./, '');
        fn.call(this);
    }).apply(this, args);
};
