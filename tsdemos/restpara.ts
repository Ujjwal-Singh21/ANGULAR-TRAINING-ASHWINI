function test (num1: number, num2: number, ...values: number[]) {
    
  var result: number = num1 + num2
  for (let value of values) {
    result = result + value
  }
  return result
}

console.log(test(1, 2, 6, 7, 8))
