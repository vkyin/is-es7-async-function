const assert = require('assert');
const isAsyncFunction = require('./index');

describe('async function should return true', function () {
    it('let fn = async function(){};', function () {
        let fn = async function () { };
        assert.equal(isAsyncFunction(fn), true);
    });

    it('async function fn(){};', function () {
        async function fn() { };
        assert.equal(isAsyncFunction(fn), true);
    });
});

describe('other function should return false', function () {
    it('let fn = function () { };', function () {
        let fn = function () { };
        assert.equal(isAsyncFunction(fn), false);
    });

    it('let fn = function* () { };', function () {
        let fn = function* () { };
        assert.equal(isAsyncFunction(fn), false);
    });
});

describe('none function type should return false', function () {
    it('null', function () {
        let fn = null;
        assert.equal(isAsyncFunction(fn), false);
    });

    it('""', function () {
        let fn = '';
        assert.equal(isAsyncFunction(fn), false);
    });
    it('0', function () {
        let fn = 0;
        assert.equal(isAsyncFunction(fn), false);
    });
    it('undefined', function () {
        let fn = undefined;
        assert.equal(isAsyncFunction(fn), false);
    });
    it('true', function () {
        let fn = true;
        assert.equal(isAsyncFunction(fn), false);
    });
    it('[]', function () {
        let fn = [];
        assert.equal(isAsyncFunction(fn), false);
    });
});