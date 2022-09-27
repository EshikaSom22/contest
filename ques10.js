//map():In javascript,Map() method creates a new array by calling a function for each element of a given array by not changing the original array.
//for example:
let myFriends=['eshika','richa','rina'];
let newFriends=myFriends.map((elements,index,array)=>{
    console.log(elements+" "+index+" "+array)
})

//ternary operator:This is the only operator in javascript which accepts three operands.Basically its the shorter version of if..else.
// Syntax of ternary operator:
// variableName=(condition)?value1:value2;
//For Example:
let age=19;
console.log(age=(age>=18)?"can vote":"can't vote");