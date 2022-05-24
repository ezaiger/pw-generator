// **CHARACTERS**

// List of lowercase letters

// List of uppercase letters

// List of numberic characters

// List of special characters

// **GENERATOR PROCESS**

// Click button to generate a password

// Prompt for length of password (between 8 to 128 characters)

// Prompt for character types to include in the password (lowercase, uppercase, numeric, and/or special characters) (OK = YES, CANCEL = NO)

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
