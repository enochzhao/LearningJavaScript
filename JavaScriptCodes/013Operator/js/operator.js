/* 运算符测试 */

//算数运算符：+、-、*、/、%
var x = 9;
var y = 3;
var z1 = x * y;
var z2 = x / y;
var z3 = x % y;

document.getElementById("ex1").innerHTML = z1 + "<br>" + z2 + "<br>" + z3;

//递增、递减运算符：++、--
var i1 = 1;
var i2 = 1;
var x1 = 3;
var y1 = x1 + ++i1;

document.getElementById("ex2").innerHTML = y1 + "<br>" + i1;

var y2 = x1 + i2++;
document.getElementById("ex3").innerHTML = y2 + "<br>" + i2;


//赋值运算符：+=、-+、*=、/=、%=
var a1 = 10;
var b1 = 2;
var a2 = 20;
var b2 = 5;

a1 *= b1;
a2 /= b2;
document.getElementById("ex4").innerHTML = a1 + "<br>" + a2;