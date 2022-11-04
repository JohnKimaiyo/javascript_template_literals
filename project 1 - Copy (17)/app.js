// Template literals (template strings) allow you to use strings or embedded expressions in the form of a string. They are enclosed in backticks ``
const firstname = `jack`;
console.log(`hello ${firstname}!`);

//Multiline Strings Using Template Literals
const message1 = `this is a long message thats spans across multiple lines in the code`;
//Expression Interpolation
const secondname = "james";
console.log(`hello'${secondname}`);

const sum = 4 + 5;
console.log(`the sum if 4 + 5 is ${sum}`);
console.log(`${sum < 10 ? "too low" : "very high"}`);
