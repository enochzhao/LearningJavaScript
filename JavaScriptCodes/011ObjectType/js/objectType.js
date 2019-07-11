/*
* 对象类型的使用
*/

var student = {
	firstName:"Peter",
	lastName:"Zhang",
	id:12345
};

/*方式一*/
document.getElementById("ex1").innerHTML = student.firstName + " " +
student.lastName + " " + student.id;

/*方式二*/
document.getElementById("ex2").innerHTML = student["firstName"] + " " +
student["lastName"] + " " + student["id"];