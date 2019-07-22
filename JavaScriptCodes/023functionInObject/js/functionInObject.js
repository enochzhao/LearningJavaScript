/* 函数定义在对象内测试 */

var student = {
		firstName:"Enoch",
		lastName:"Zhao",
		id:"1234",
		stuName:function(){
					return this.firstName + " " + this.lastName;
		}
};

function outPrint(){
	document.getElementById("ex").innerHTML = student.stuName();
}