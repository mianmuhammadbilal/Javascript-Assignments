let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");
let num1 = Number(input1);
let num2 = Number(input2);

if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter valid numbers.");
} else {
  if (num1 > num2) {
    alert(`The larger number is ${num1}.`);
  } else if (num2 > num1) {
    alert(`The larger number is ${num2}.`);
  } else {
    alert("Both numbers are equal.");
  }
}
