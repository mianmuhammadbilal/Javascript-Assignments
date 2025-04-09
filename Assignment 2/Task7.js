let marksInput = prompt("Enter the student's marks:");
let marks = Number(marksInput);
if (isNaN(marks) || marks < 0 || marks > 100) {
  alert("Please enter valid marks between 0 and 100.");
} else {
  let grade;

  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 80) {
    grade = "B";
  } else if (marks >= 70) {
    grade = "C";
  } else if (marks >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  alert(`Grade: ${grade}`);
}
