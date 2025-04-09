let input = prompt("Enter a number:");

let number = Number(input);
if (isNaN(number)) {
  alert("That's not a valid number.");
} else {
  // Check if the number is even or odd
  if (number % 2 === 0) {
    alert("The number is even.");
  } else {
    alert("The number is odd.");
  }
}
