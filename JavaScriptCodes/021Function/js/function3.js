/* 有返回值的带参函数 */

function sumFun(x, y){
	sum = x + y;
	return sum;
}

function outPrint(){
	document.getElementById("ex").innerHTML = "返回值为: " + sumFun(50, 50);
}