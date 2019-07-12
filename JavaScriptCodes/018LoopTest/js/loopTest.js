/*循环测试*/

function forFun(){
	var strText = "";
	var sum = 0;

	for (var i = 1; i<=5; i++){
		sum += i;
		strText += "Loop = " + i + ",Sum = " + sum + "<br>";
	}
	document.getElementById("for-msg").innerHTML = strText;
}

function whileFun(){
	var strText = "";
	var i = 0;
	var sum = 0;
	
	while (i<5){
		i++;
		sum += i;
		strText += "Loop = " + i + ",Sum = " + sum + "<br>";	
	}
	document.getElementById("while-msg").innerHTML = strText;
}

function doWhileFun(){
	var strText = "";
	var i = 0;
	var sum = 0;
	
	do {
		i++;
		sum += i;
		strText += "Loop = " + i + ",Sum = " + sum + "<br>";	
	}while (i<5);
	document.getElementById("do-while-msg").innerHTML = strText;
}