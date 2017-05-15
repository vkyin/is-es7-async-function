let asyncFunction = async function () {

};
let toStrFn = Object.prototype.toString;

let protoStr = toStrFn.call(asyncFunction);

let isAsyncFunction = function (obj){
    return toStrFn.call(obj) === protoStr;
}

module.exports = isAsyncFunction;