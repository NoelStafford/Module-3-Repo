// storage for the variables
var storage = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!@#$%^&*()_-+=\{\}[]`~<>;:",
  numbers: "0123456789"
}

//main function
function generatePassword () {
  var storedChars = [];
  var passwordRandomized = "";
    //ask how long they want the password to be
    let passlength = Number(prompt("How long do you want your password to be? (Must be between 8 and 128 characters"));
    //check to make sure they put in a valid number
      if((!passlength) || (passlength < 8) || (passlength > 128)) {
        alert("Please enter a valid number");
        return generatePassword();
      }

    //check for uppercase
    let upperCaseConfirmation = confirm("Would you like to use any Uppercase letters in your password?");
      if (upperCaseConfirmation) {
        storedChars = storedChars.concat(storage.uppercase);
      } 
    //check for lowercase
    let lowerCaseConfirmation = confirm("Would you like to use any lowercase letters in your password?");
      if (lowerCaseConfirmation) {
        storedChars = storedChars.concat(storage.lowercase);
      }  
    //check for special characters
    let specialCharactersConfirmation = confirm("Would you like to use any special characters in your password?")
      if (specialCharactersConfirmation) {
        storedChars = storedChars.concat(storage.special);
      }   
    //check for numbers
    let numbersConfirmation = confirm("Would you like to use any numbers in your password?")
      if (numbersConfirmation) {
        storedChars = storedChars.concat(storage.numbers);
      }
    //if they selected no options
    if (!lowerCaseConfirmation && !upperCaseConfirmation && !specialCharactersConfirmation && !specialCharactersConfirmation) {
      alert("Please select at least on the options!");
      return("Please try again.");
    }
    storedChars = storedChars.toString();
    storedChars = storedChars.split('');
    //randomize the password
    for (let i = 0; i < passlength; i++) {
      passwordRandomized += storedChars[Math.floor(Math.random() * storedChars.length)];
    }
    return passwordRandomized;
}

//code given to us
var generateBtn = document.querySelector("#generate");
//password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
