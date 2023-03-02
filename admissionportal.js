var username = prompt('Pls enter your name');
var applicantsAge = parseInt(prompt('specify your age'));

document.write('Hello '+ username + ' welcome to the admission portal' + "<br>");

if ((applicantsAge >= 15) && (applicantsAge <= 18)){
    document.write('You re eligible for Engineering courses');
}else if((applicantsAge >= 19) && (applicantsAge <= 21)){
    document.write('You re qualified for a computer science course');
}else if ((applicantsAge >= 22) && (applicantsAge <= 24)){
    document.write('You re eligible for economics degree');
}else if ((applicantsAge >=30)){
    document.write('kindly contact the admin. Thanks');
}else {
    document.write('kindly contact the admission office');    
}

