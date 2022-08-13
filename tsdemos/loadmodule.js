'use strict'
exports.__esModule = true
var demomodule = require('./classdemo')
var obj2 = new demomodule.Product(2, 'some product', 67000)
console.log(obj2.getDiscountedPrice())
