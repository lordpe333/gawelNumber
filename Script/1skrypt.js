var firstNumber = prompt("Enter the first number:");

var secondNumber = prompt("Enter the second number:");

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  var sum = firstNumber + secondNumber;

  alert("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);
} else {
  alert("Invalid input. Please enter valid numbers.");
}
