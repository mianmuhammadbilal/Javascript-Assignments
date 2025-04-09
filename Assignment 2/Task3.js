let input = prompt("Enter your age:");
let age = Number(input);
if (isNaN(age) || age < 0) {
  alert("Please enter a valid age.");
} else {
  if (age >= 18) {
    alert("You are eligible to vote.");
  } else {
    alert("You are not eligible to vote yet.");
  }
}
