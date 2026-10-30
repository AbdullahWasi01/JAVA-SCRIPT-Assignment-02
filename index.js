

// Q-1

// var num=10

// document.write("Result: <br>")
// document.write("The result of a is : " + num + "<br>" )

// document.write("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ " + "<br>"  + "<br>" + "<br>")


// document.write("The value of ++a is : " + ++num + "<br>" )
// document.write("Now the value of a is :" + num + "<br>" + "<br>") 

// document.write("The value of a++ is : " + num++ + "<br>" )
// document.write("Now the value of a is : " + num + "<br>"+ "<br>" )


// document.write("The value of --a is : " + --num + "<br>" )
// document.write("Now the value of a is : " + num + "<br>" + "<br>")

// document.write("The value of a-- is : " + num-- + "<br>" )
// document.write("Now the value of a is : " + num + "<br>")



// Q-2

// var a=2 , b=1;
// var result= --a - --b + ++b + b--;


// document.write( " a is : " + a + "<br>")
// document.write( " b is : " + b + "<br>" )
// document.write("result is " + result )

// --a; 
// The value is 1, --a = 1-a , so the previous value of a is 2. so in this we do post fix -. 1-2.

// --a - --b
// --a is 0 , because previous updated value of a is 1, so 1 - 1 =0. and --b = 1-1 = 0 / 0-0 = 0

// --a - --b + ++b
// --a is 1 - 0 = -1 , --b is 1 - 0= -1
// ++b = 1 + -1 = 0

// --a - --b + ++b + b--;
// --a= 1 - -1= -2 , --b= 0 - -1= -1 ,++b= 1 + (-1) = 0, b-- = 0 - 1 = -1


// Q-3

// var username=prompt("Enter Your Name")
// prompt(hello)

// alert("Hello " + username)


// Q-5

// var num=prompt("Enter a number")
// if (num == "" || num == null){num=5}
// for (var i=1; i<=10; i++){

// document.write(num + " x " + i + "=" + num*i + "<br>")
// }


// // Q-6

// var subject1=prompt("Enter Subject 1")
// var subject2=prompt("Enter Subject 2")
// var subject3=prompt("Enter Subject 3")

// var totalMarks=100

// var marks1=prompt("Enter Obtained Marks of subject 1 marks")
// var marks2=prompt("Enter Obtained Marks of subject 2 marks")
// var marks3=prompt("Enter Obtained Marks of subject 3 marks")

// var percent1 = marks1 / totalMarks * 100
// var percent2 = marks2 / totalMarks * 100
// var percent3 = marks3 / totalMarks * 100

// var grandTotal= totalMarks * 3
// var grandObtained= Number(marks1) + Number(marks2) + Number(marks3)

// var percentage = grandObtained/grandTotal * 100


// document.write("<table>")
// document.write("<tr> <th> Subjects</th> <th> Total Marks </th> <th> Obtained Marks </th> <th> Percentage </th> </tr>")
// document.write("<tr> <td>" + subject1 + "</td> <td>" + totalMarks + "</td> <td>" + marks1 + "</td> <td>" + percent1 + "%</td> </tr>")

// document.write("<tr> <td>" + subject2 + "</td> <td>" + totalMarks + "</td> <td>" + marks2 + "</td> <td>" + percent2 + "%</td> </tr>")

// document.write("<tr> <td>" + subject3 + "</td> <td>" + totalMarks + "</td> <td>" + marks3 + "</td> <td>" + percent3 + "%</td> </tr>")

// document.write("<tr> <th>" + "</th> <th>" + grandTotal + "</th> <th>" + grandObtained + "</th> <th>" + percentage + "%</th> </tr>" )

// document.write("</table>")