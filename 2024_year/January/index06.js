// find the sum of positive numbers
// if the user enters a negative numbers, the loop ends

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) 
{
     sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

console.log(`The sum is ${sum}.`);