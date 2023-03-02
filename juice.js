//FRUIT CUTTER FUNCTION

// function fruitcutter(fruit){
//     return fruit / 5
// }
// const fruitBlend = function (mango, banana, grape){
//     const mangoPiece = fruitcutter(mango);
//     const bananaPiece = fruitcutter(banana);
//     const grapePiece = fruitcutter(grape);
    
//     const juice = `juice with ${bananaPiece} of banana and ${mangoPiece} of mango ${grapePiece} of grape`;
//     return  juice;
// }
// const fruitBlender = fruitBlend(20, 30, 25);
// console.log(fruitBlender);


// const ageCal = function (year){
//     return 2023 - year;
// }
// const yearUntilRetirement = function (BirthYear, firstname){
//     const age = ageCal(BirthYear);
//     const retirement = 65 - age;
//     if(retirement > 0){
//         console.log(`${firstname} retires in ${retirement} years`)
//         return retirement;
        
//     }else{
//         return -1;
//     }
// }
// console.log(yearUntilRetirement(1970, 'john'))



// const ageCalculator = function (BirthYear) {
//      return 2023 - BirthYear;
// }
// const years = ['1995', '1996', '1997', '1998', '1999'];


// const age1 = ageCalculator(years[0]);
// const age2 = ageCalculator(years[1]);
// const age3 = ageCalculator(years[years.length-1]);

// const ages = [age1, age2, age3];
// console.log(ages);

// years[0] = 2000
// console.log(years)

// years.push(2022)
// console.log(years)

// years.unshift(2029)
// console.log(years)

// years.pop(1999)
// console.log(years)

// years.shift(1995)
// console.log(years)







//OBJECTS

const students = {
    firstname: 'David',
    lasstname: 'Ugioms',
    age: '20',
    Job: 'programmer',
    friends: ['james', 'Sam', 'Mike', 'Dan', 'David',]
};

console.log(`${students.firstname} has ${students.friends.length} and his best friend is ${students.friends[3]}`)

//BRACKET NOTATION: Another way to call an object 

console.log(students['lasstname']);
