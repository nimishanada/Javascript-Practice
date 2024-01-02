// Nested if..else. condition
function getNumber(number)
{
if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}
}
console.log(getNumber(0)); // You entered number 0