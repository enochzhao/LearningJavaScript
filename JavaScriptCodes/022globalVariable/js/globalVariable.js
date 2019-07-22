/*全局变量与局部变量测试*/

var msg = "我是全局变量~";//全局变量值

function outPrint(){
	document.getElementById("ex1").innerHTML = msg;
	document.getElementById("ex2").innerHTML = txtStr("我是局部变量~");
	document.getElementById("ex3").innerHTML = msg;
}

function txtStr(str){
	return str;
}