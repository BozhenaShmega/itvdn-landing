(function() {
    var me = {};

    me.isEmail = function(email) {
        var re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return re.test(email);
    };

    me.isNumber = function(number) {
        var re = /^\d+$/;
        return re.test(number);
    };

    me.isNotEmpty = function(str) {
        return Boolean(str);
    };

    ITVDN.validation = me;
}());