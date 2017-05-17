let toStrFn = Object.prototype.toString;
/**
 * here define an async function
 * it will throw a SyntaxError while your javascript runtime is not support AsyncFunction featrue
 */
let asyncFunction = async function () { };

let prototypeOfAsyncFunction = Object.getPrototypeOf(asyncFunction);

/**
 * normally, it will return 'AsyncFunction'
 */
let asyncFunctionName = asyncFunction.constructor.name;

/**
 * normally, it will return '[object AsyncFunction]'
 */
let protoStr = toStrFn.call(asyncFunction);

let isAsyncFunction = function (obj) {
    return obj.constructor
        && obj.constructor.name === asyncFunctionName
        && toStrFn.call(obj) === protoStr
        && Object.getPrototypeOf(obj) === prototypeOfAsyncFunction;
}

module.exports = isAsyncFunction;