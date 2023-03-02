var states = {
    5 : "Abuja",
    3 : "FCT",
    1 : "Edo",
}

var input = parseInt(prompt("Enter a number between 1, 3 and 5:"));

if (input in states) {
  alert("The corresponding value is: " + states[input]);
} else {
  alert("Invalid input. Please enter a number between 1, 3 and 5.");
}
