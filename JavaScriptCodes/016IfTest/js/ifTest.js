var ranData;
ranData = Math.random();
document.getElementById("ex1").innerHTML = "Random Number is = " + ranData;
if (ranData > 0.5){
	document.getElementById("ex2").innerHTML = "ex2 = big";
}else{
	document.getElementById("ex3").innerHTML = "ex2 = small";
}

function exFun(){
	var timeHour = new Date().getHours();//获取当前时间
	document.getElementById("numberHour").innerHTML = "Hours = " + timeHour;
	if (timeHour <= 8){
		document.getElementById("msg").innerHTML = "早上";
	} else if(timeHour>8 && timeHour<=12){
		document.getElementById("msg").innerHTML = "上午";
	} else if(timeHour>12 && timeHour<=17){
		document.getElementById("msg").innerHTML = "下午";
	} else{
		document.getElementById("msg").innerHTML = "晚上";
	}
}