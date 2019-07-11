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
			document.getElementById("msg").innerHTML = "照常上班！";
	}
}