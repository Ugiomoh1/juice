var username = prompt('enter your name');
var age = parseInt(prompt('enter your age'))


switch(true){
    case((age >= 15) && (age <= 18)):
        alert(username + 'eligible for computer sci');
        break;
    case((age >= 19) && (age <= 21)):
        alert(username + ' Eligible for medicine');
        break;
    case((age >= 22) && (age <= 24)):
        alert(username + ' Eligible for economics');
        break;
    // case((age >= 15) && (age <= 18)):
    //     alert(age + ' Eligible for comp Sci');
    //     break;
    // case((age >= 15) && (age <= 18)):
    //     alert(age + ' Eligible for comp Sci');
    //     break;


}