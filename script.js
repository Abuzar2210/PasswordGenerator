// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password
function generatePassword(){
    var passwordLength = Number(window.prompt("How long do you want your password to be? Please choose between 8 to 128 characters"));
    if(!(passwordLength>=8 && passwordLength<=128)){
        window.alert ("Invalid Entry, Please try again. Choose between 8 to 128 characters");
        return;
    }

}