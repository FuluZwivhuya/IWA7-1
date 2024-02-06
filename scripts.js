//Challemge one

const value = 3; // the value was a numeric string and not a number. so I had to remove the the double qoutes
console.log(value + 4 + value); /*initially this is how the javascript read the code ' number + string + number", 
so that does not make sense to add together, rather than to string the values together*/

//Challenge two

const nickname= "Timmy";
const firstname = "Timothy";

//console.log("Good Morning, ${nickname} || {firstname}!")

console.log (`good morning, ${nickname}, ${firstname}!`) //test to make sure that all variables were reflecting om console
let valid;
let invalidNickname;
const validNickname = `${nickname},${valid}
`
if (validNickname){console.log(nickname || firstname )}
else if (invalidNickname){console.log (firstname)} 
else if (null){console.log("good morning")};





//console.log ( `${nickname} || ${firstname}!`)
//console.log ( `${nickname} && ${firstname}!`)
