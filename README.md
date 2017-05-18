# is-es7-async-function

> to check if a function is an es7 async-function

## badges
[![npm](https://img.shields.io/npm/v/is-es7-async-function.svg)]()
[![Build Status](https://travis-ci.org/vkyin/is-async-function.svg?branch=master)](https://travis-ci.org/vkyin/is-async-function)
[![npm](https://img.shields.io/npm/dt/is-es7-async-function.svg)]()
[![npm](https://img.shields.io/npm/l/is-es7-async-function.svg)]()
[![vkyin.cn](https://img.shields.io/badge/website-vkyin.cn-blue.svg)](http://vkyin.cn/)

## Installation

```
npm install is-es7-async-funciton --save
```

## Usage
```
const isEs7AsyncFunction = require('is-es7-async-funciton');

let fn = async function(){};
let anotherFn = function(){};

isEs7AsyncFunction(fn);         //return true
isEs7AsyncFunction(anotherFn);  //return false
```

## License

MIT