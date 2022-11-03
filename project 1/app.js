// Template literals (template strings) allow you to use strings or embedded expressions in the form of a string. They are enclosed in backticks ``
const name = `jack`;
console.log(`Hello ${name}!`); // Hello Jack!

//Multiline Strings Using Template Literals
const message1 = `This is a long message
that spans across multiple lines
in the code.`;
console.log(message1);

//Expression Interpolation
const firstname = "jack";
console.log(`hello'${firstname}`);

const sum = 4 + 5;
console.log(`The sum of 4 + 5 is ${sum}`);

console.log(`${sum < 10 ? "Too low" : "very high"}`);
