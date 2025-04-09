let ageInput = prompt("Enter your age:");
let age = Number(ageInput);
let hasMembership = prompt("Do you have a membership card? (yes/no)").toLowerCase();
if (isNaN(age) || age < 0) {
  alert("Please enter a valid age.");
} else {
  if (age >= 60 || hasMembership === "yes") {
    alert("You are eligible for a discount!");
  } else {
    alert("You are not eligible for a discount.");
  }
}
