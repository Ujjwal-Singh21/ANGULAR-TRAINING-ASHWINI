"use strict";
exports.__esModule = true;
exports.Product = exports.num = void 0;
exports.num = 10;
var Product = /** @class */ (function () {
    function Product(pid, pname, price) {
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }
    Product.prototype.getDiscountedPrice = function () {
        return this.price - this.price * 0.1;
    };
    Product.prototype.showProductDetails = function () {
        return 'productId: ' + this.pid + ' productName: ' + this.pname + ' price: ' + this.price;
    };
    return Product;
}());
exports.Product = Product;
var obj = new Product(101, 'Mobile', 4500);
console.log(obj.getDiscountedPrice());
console.log(obj.showProductDetails());
