function testfun () {
    
  const num: number = 10
  var num1: number = 10

  {
    var num2: number = 20
    console.log(num1)
    console.log(num2)
  }

  console.log(num1)
  console.log(num2)
}

testfun()
