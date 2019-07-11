var a = 5;//0101
var b = 1;//0001

document.getElementById("ex1").innerHTML = "a = 5 （二进制：0101）" + "<br>" + 
										   "b = 1 （二进制：0001）";
document.getElementById("ex2").innerHTML = "a & b   = " + ( a &  b );
document.getElementById("ex3").innerHTML = "a | b   = " + ( a |  b );
document.getElementById("ex4").innerHTML = "a ^ b   = " + ( a ^  b );
document.getElementById("ex5").innerHTML = "  ~a    = " + (   ~a   );
document.getElementById("ex6").innerHTML = "a << b  = " + ( a << b );
document.getElementById("ex7").innerHTML = "a >> b  = " + ( a >> b );
document.getElementById("ex8").innerHTML = "a >>> b = " + ( a >>> b);