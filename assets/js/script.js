// **CHARACTERS**

// List of lowercase letters
const lowercaseLett = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// List of uppercase letters
const uppercaseLett = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// List of numerical characters
const numericalChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// List of special characters
const specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',];

// **GENERATOR PROCESS**

// Click button to generate a password

// Prompt for length of password (between 8 to 128 characters)
var pwLength = window.prompt("How many characters would you like your password to have?");

// Prompt for character types to include in the password (lowercase, uppercase, numeric, and/or special characters) (OK = YES, CANCEL = NO)
var includeLow = window.prompt("Would you like to include lowercase letters?");
var includeUpp = window.prompt("Would you like to include uppercase letters?");
var includeNum = window.prompt("Would you like to include numbers?");
var includeSpc = window.prompt("Would you like to include special characters?");

// Input should be validated and at lease one character type should be selected

// A password is generated that matches the selected criteria

// Password is displayed in an alert or written to the page



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
