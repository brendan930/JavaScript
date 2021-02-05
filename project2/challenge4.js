/*
Create a simple calculator that can add, subtract, multiply, and divide two numbers

1. Have two inputs for the user to put in 2 numbers
2. When an operation (+, -, *, /) is pushed, the 2 numbers are stored in variables
3. Perform addition, subtraction, multiplication, and division on the numbers
4. Display the sum, difference, product, and quotient of the two numbers
    -  You will need a display area on your page

CHALLENGE:
- When dividing, display the answer as a whole number quotient with remainder (no decimals)

HINT: you will need Modulus %

*/


function plus() {
  // 1. get the value of input1 and store in a var
  // 2. get the value of input2 and store in a var
  // 3. create a variable to store the sum
  // 4. display the variable on your HTML

  let jinput1 = document.querySelector(".input1").value;
  let jinput2 = document.querySelector(".input2").value;
  jinput1 = parseInt(jinput1)
  jinput2 = parseInt(jinput2)
  let final = jinput1 + jinput2
  document.querySelector(".answers").innerHTML = final
}

function minus() {
  let jinput1 = document.querySelector(".input1").value;
  let jinput2 = document.querySelector(".input2").value;
  jinput1 = parseInt(jinput1)
  jinput2 = parseInt(jinput2)
  let final = jinput1 - jinput2
  document.querySelector(".answers").innerHTML = final
}

function divide() {
  let jinput1 = document.querySelector(".input1").value;
  let jinput2 = document.querySelector(".input2").value;
  jinput1 = parseInt(jinput1)
  jinput2 = parseInt(jinput2)
  let final1 = jinput1 / jinput2
  let final2 = jinput1 % jinput2
  final1 = parseInt(final1)
  document.querySelector(".answers").innerHTML = final1 + " r " + final2
}

function multiply() {
  let jinput1 = document.querySelector(".input1").value;
  let jinput2 = document.querySelector(".input2").value;
  jinput1 = parseInt(jinput1)
  jinput2 = parseInt(jinput2)
  let final = jinput1 * jinput2
  document.querySelector(".answers").innerHTML = final
}
