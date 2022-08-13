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
}
