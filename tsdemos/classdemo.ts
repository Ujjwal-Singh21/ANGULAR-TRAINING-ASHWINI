export var num: number = 10

export class Product {
  private pid: number
  private pname: string
  private price: number

  constructor (pid: number, pname: string, price: number) {
    this.pid = pid
    this.pname = pname
    this.price = price
  }

  getDiscountedPrice () {
    return this.price - this.price * 0.1
  }

  showProductDetails() {
    return 'productId: ' + this.pid + ' productName: ' + this.pname + ' price: ' + this.price; 
  }
}


var obj = new Product(101, 'Mobile', 4500);

console.log(obj.getDiscountedPrice())
console.log(obj.showProductDetails())