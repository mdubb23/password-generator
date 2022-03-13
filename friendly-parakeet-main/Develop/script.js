// Assignment code here
var generatePassword = function () {
  // propmts length/types of characters
  var passwordLengthConfirm = window.prompt("How many character would you like your password?");
  var numbersConfirm = window.confirm("would you like to include numbers?");
  var upperCaseConfirm = window.confirm("would you like to include uppercase characters?");
  var lowerCaseConfirm = window.confirm("Would you like to include lowercase characters?");
  var specialCharactersConfirm = window.confirm("Would you like to include special characters?");


  // validate selection and generate password

  //display password
  return ("Generated Password");
}


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
