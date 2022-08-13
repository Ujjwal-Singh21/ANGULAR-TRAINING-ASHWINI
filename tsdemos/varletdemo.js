function testfun () {
  var num = 10
  var num1 = 10
  {
    var num2 = 20
    console.log(num1)
    console.log(num2)
  }
  console.log(num1)
  console.log(num2)
}
testfun()
