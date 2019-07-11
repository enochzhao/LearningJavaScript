function exFun(){
	var dayWeek = new Date().getDay();//获取当前周几
	switch (dayWeek){
		case 0:
			document.getElementById("msg").innerHTML = "今天周日放假！";
			break;
		case 6:
			document.getElementById("msg").innerHTML = "今天周六放假！";
			break;
		default:
			document.getElementById("msg").innerHTML = "照常上班日！";
	}
}

function input(){
	var numInput = window.prompt("请输入数字0~6", "");
	switch (Number(numInput)){
		case 0:
			window.alert("周日");
			break;
		case 1:
			window.alert("周一");
			break;
		case 2:
			window.alert("周二");
			break;
		case 3:
			window.alert("周三");
			break;
		case 4:
			window.alert("周四");
			break;
		case 5:
			window.alert("周五");
			break;
		case 6:
			window.alert("周六");
			break;
		default:
			window.alert("输入错误");
	}
}