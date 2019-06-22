module.exports = function() {
    return function(str = '') {
        return (
            (str || '') + ''
        ).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
    }
};