var x = 5;
var y = 7;
console.log("before swap: x = ", x, ", y = ", y);
var temp = x;
x = y;
y = temp;
console.log("after swap: x = ", x, ", y = ", y);


var a = 5;
var b = 7;
console.log("before swap: a = ", a, ", b = ", b);
a = a + b;
b = a - b;
a = a - b;
console.log("after swap: a = ", a, ", b = ", b);


var p = 5;
var q = 7;
console.log("before swap: p = ", p, ", q = ", q);
[p, q] = [q, p];
console.log("after swap: p = ", p, ", q = ", q);