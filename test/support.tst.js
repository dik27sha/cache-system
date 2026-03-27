var support = require('./support');  // path sahi rakhna
var assert = require('assert');

describe('Support Test', function () {

    it('random string generate kare', function () {
        var str = support.random.string(5);
        console.log(str);
        assert.equal(str.length, 5);
    });

    it('number generate kare', function () {
        var num = support.random.number(100);
        console.log(num);
        assert.ok(num >= 0 && num < 100);
    });

});