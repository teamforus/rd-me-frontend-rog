module.exports = function() {
    return function(_in) {
        if (typeof _in == 'string') {
            return _in.toUpperCase();
        }

        return '';
    }
};