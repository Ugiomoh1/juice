// alert('Welcome to My Page David')
var username = prompt ('pls enter name')
alert(username + ' Goodmorning, How are You');

// An app that RESTRICT A STUDENTS ENTRY BASED CRITERIA

var name = prompt ('pls enter name')  //step1 is for getting the username
var age = prompt('Enter your age');  //st2 is for getting the age
age = parseInt(age);                 //step3 is typecasting the age to int

alert('welcome' + username + 'Visit University registry')

if (age > 18 ){
    document.write('You re not eligible')
}else if (age > 25){
    document.write('U re eligible for computer sci')
}else if (age > 30){
    document.write('U re not eligible for econs')
}

