
//布尔值：true、false
var a = true;
var b = false;

document.getElementById("ex1").innerHTML = a + "<br>" + b;

//比较运算符：<、>、>=、<=、==、===、!=、!==
var x = 1;
var y = "1";

document.getElementById("ex2").innerHTML = (x==y);
document.getElementById("ex3").innerHTML = (x===y);

//逻辑运算符：&&、||、!
document.getElementById("ex4").innerHTML = "ture && ture = " + (a && a);
document.getElementById("ex5").innerHTML = "ture && false = " + (a && b);
document.getElementById("ex6").innerHTML = "false && ture = " + (b && a);
document.getElementById("ex7").innerHTML = "false && false = " + (b && b);

document.getElementById("ex8").innerHTML = "ture || ture = " + (a || a);
document.getElementById("ex9").innerHTML = "ture || false = " + (a || b);
document.getElementById("ex10").innerHTML = "false || ture = " + (b || a);
document.getElementById("ex11").innerHTML = "false || false = " + (b || b);

document.getElementById("ex12").innerHTML = "!ture = " + (!a);
document.getElementById("ex13").innerHTML = "!false = " + (!b);