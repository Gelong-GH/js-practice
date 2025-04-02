// Predefined password
let password = "Call Of Duty";

// Ask for user input
let user_name = prompt("Please enter your username:");
let user_password = prompt("please enter your password:");

// Check if the entered password matches the predefined password
if (user_password === password) {
  // If password matches, welcome the user
  alert(`Welcome, ${user_name}!! Initiating login...`);
} else {
  // If password does not match, show an error message
  alert("Access Denied. Unidentified User!!");
}
