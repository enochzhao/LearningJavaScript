/*猜数游戏*/

function gameFun(){
	var puzzle = 30;
	var time = 1;
	var numInput = window.prompt("请输入0-50以内数字", "");

	do {
		if (Number(numInput) > puzzle) {
			time++;
			window.alert("数字有点大了！猜小一点吧~");
			numInput = window.prompt("请输入0-50以内数字", "");
		} else if (Number(numInput) < puzzle) {
			time++;
			window.alert("数字有点小了！猜大一点吧~");
			numInput = window.prompt("请输入0-50以内数字", "");
		}else {
			if (Number(numInput) === puzzle)
				break;
			window.alert("只能输入数字哦，请重新输入吧！");
			numInput = window.prompt("请输入0-50以内数字", "");
		}
	} while (Number(numInput) !== puzzle)
	window.alert("恭喜！您猜对了！\n用了" + time + "次哦！");
}