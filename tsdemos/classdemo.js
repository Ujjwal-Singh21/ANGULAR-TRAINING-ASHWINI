'use strict'
exports.__esModule = true
exports.Product = void 0
var Product = /** @class */ (function () {
  function Product (pid, pname, price) {
    this.pid = pid
    this.pname = pname
    this.price = price
  }
  Product.prototype.getDiscountedPrice = function () {
    return this.price - this.price * 0.1
  }
  return Product
})()
exports.Product = Product
