module.exports = function() {
    return function(str = '', delimiter = "\n") {
        return (str + "").split(delimiter);
    }
};