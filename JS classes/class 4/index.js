/*.
1.Boolean (true, false)
2.Strict equality operator (===)
3.Les than & greater than(>, <)
4.Less than equals to (<==)
5.not equals to ( !==)
6.if statement
7.else if
8.else statement
*/


// 6. If statement

/*var studentName = 'Ahmed';
var studentId = '139122';
var attendence = '23';
var totalClasses = '30';
var studentAttendancePercentage = attendence / totalClasses * 100 ;

console.log(studentAttendancePercentage);

if (studentAttendancePercentage > 70) {
    console.log(studentName) Ahmed;
}
*/

var studentName = prompt('Tell Your Name');
var studentId = '139122';
var attendence = prompt('Tell Your Attendance')
var totalClasses = 30;
var studentAttendancePercentage = attendence / totalClasses * 100 ;

console.log(studentAttendancePercentage);

if (studentAttendancePercentage > 70) {
    alert(studentName + " 's attendance is ok");
}

if (studentAttendancePercentage >70) {
    alert(studentName + " 's attendence is ok");
} else if (studentAttendancePercentage >50) {
    alert( 'You should focus on your attendance')
}else {
    alert('you should leave class')
}
  
