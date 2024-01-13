//Simple calculator with switch case

function calNumber(num1,num2,operand){

    switch(operand) {
      case "+":
        console.log("Answer: " + (num1 + num2));
        break;
      case "-":
        console.log("Answer: " + (num1 - num2));
        break;
      case "*":
        console.log("Answer: " + (num1 * num2));
        break;
      case "/":
        console.log("Answer: " + (num1 / num2));
        break;
    }
    }
    
    console.log(calNumber(3,5,"*")); //15