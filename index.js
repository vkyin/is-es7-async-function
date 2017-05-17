/**
 * here define an async function
 * it will throw a SyntaxError while your javascript runtime is not support AsyncFunction featrue
 */
let asyncFunction = async function () {};

/**
 * 
 */
let protoOfAsyncFunction = Object.getPrototypeOf(asyncFunction);

let toStrFn = Object.prototype.toString;

let protoStr = toStrFn.call(asyncFunction);

let isAsyncFunction = function (obj){
    return toStrFn.call(obj) === protoStr;
}

module.exports = isAsyncFunction;