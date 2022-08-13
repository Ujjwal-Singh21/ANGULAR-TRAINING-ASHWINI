var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i]
    return to
  }
var myArr1 = [10, 11, 12]
var copyArr = __spreadArray([], myArr1)
for (var _i = 0, copyArr_1 = copyArr; _i < copyArr_1.length; _i++) {
  var ele = copyArr_1[_i]
  console.log(ele)
}
