/*数组测试*/

function numArrayFun(){
	var numList = [8, 7, 9, 2, 5];
	var numArray = "";

	for (var i = 0; i < numList.length; i++){
		numArray += "numList[" + i + "] = " + numList[i] + "<br>";
	}
	document.getElementById("msg1").innerHTML = numArray;
}

function strArrayFun(){
	var strList = ["Apple", "Orange", "Banana"];
	var strArray = "";

	for (var i in strList){
		strArray += "strList[" + i + "] = " + strList[i] + "<br>";
	}
	document.getElementById("msg2").innerHTML = strList;
	document.getElementById("msg3").innerHTML = strArray;
}

function sortFun(){
	var numList = [8, 7, 9, 2, 5];
	var numSort = numList.sort();//排序
	var numArray = "";

	for (var i in numList){

		numArray += "numSort[" + i + "] = " + numSort[i] + "<br>";
	}
	document.getElementById("msg4").innerHTML = numArray;
}

function listFun(){
	var strList = ["Apple", "Orange", "Banana"];
	var ulText = "<ul>";

	for (var i in strList){
		ulText += "<li>" + strList[i] + "</li>";
	}
	ulText += "</ul>";
	document.getElementById("msg5").innerHTML = ulText;
}