// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// **CHARACTERS**

// List of lowercase letters
const lowercaseLett = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// List of uppercase letters
const uppercaseLett = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// List of numerical characters
const numericalChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// List of special characters
const specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~',];

// **GENERATOR PROCESS**

// Click button to generate a password
function generatePassword() {
  var finalPassword = "";

  // Prompt for length of password (between 8 to 128 characters)
  var pwLength = prompt("How many characters would you like your password to have? Password needs to have between 8 to 128 characters.");
  if (pwLength >= 8 && pwLength <= 128) {
    // Prompt for character types to include in the password (lowercase, uppercase, numeric, and/or special characters) (OK = YES, CANCEL = NO)
    var includeLow = confirm("Would you like to include lowercase letters? Click OK for yes, Cancel for no.");
    var includeUpp = confirm("Would you like to include uppercase letters? Click OK for yes, Cancel for no");
    var includeNum = confirm("Would you like to include numbers? Click OK for yes, Cancel for no");
    var includeSpc = confirm("Would you like to include special characters? Click OK for yes, Cancel for no");
    
    if (includeLow === true) {
      var randomIndex = Math.floor(Math.random() * 26);
      console.log("randomIndex", randomIndex);
      finalPassword = finalPassword + lowercaseLett[randomIndex];
    }
    if (includeUpp === true) {
      var randomIndex = Math.floor(Math.random() * 26);
      console.log("randomIndex", randomIndex);
      finalPassword = finalPassword + uppercaseLett[randomIndex];
    }
    if (includeNum === true) {
      var randomIndex = Math.floor(Math.random() * 10);
      console.log("randomIndex", randomIndex);
      finalPassword = finalPassword + numericalChar[randomIndex];
    }
    if (includeSpc === true) {
      var randomIndex = Math.floor(Math.random() * specialChar.length);
      console.log("randomIndex", randomIndex);
      finalPassword = finalPassword + specialChar[randomIndex];
    }
    // Input should be validated and at lease one character type should be selected
  } else {
    alert("Invalid entry. Please enter a number between 8 and 128");
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Password is displayed - written to the page
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
