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


// Characters allowed to be used
var uppercaseChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var lowercaseChar = ("abcdefghijklmnopqrstuvwxyz")
var numberChar = ("1234567890")
var speicalChar = ("!@#$%^&*()+={}[]")
var passChar = "";
var constChar = [];

// Function to generate password
function generatePassword(){
    var passwordLength = Number(window.prompt("How long do you want your password to be? Please choose between 8 to 128 characters", "10"));
    if(!(passwordLength>=8 && passwordLength<=128)){
        window.alert ("Invalid Entry, Please try again. Choose between 8 to 128 characters");
        return;
    }

    var uppercaseCon = (window.confirm ("Would you like your password to contain uppercase letters?"));
    var lowercaseCon = (window.confirm ("Would you like your password to contain lowercase letters?"));
    var numberCon =  (window.confirm ("Would you like your password to contain numbers?"));
    var speicalCon = (window.confirm ("Would you like your password to contain speical characters?"));


    var randomPassword = ""; 

    //possible combinations for passwords

    if(uppercaseCon){
        passChar += uppercaseChar; 
        constChar.push(uppercaseChar.charAt(Math.floor(Math.random()*uppercaseChar.length)))
    }
    if(lowercaseCon){
        passChar += lowercaseChar; 
        constChar.push(lowercaseChar.charAt(Math.floor(Math.random()*lowercaseChar.length)))
    }
    if(numberCon){
        passChar += numberChar; 
        constChar.push(numberChar.charAt(Math.floor(Math.random()*numberChar.length)))
    }
    if(speicalChar){
        passChar += speicalChar; 
        constChar.push(speicalChar.charAt(Math.floor(Math.random()*speicalChar.length)))
    }

    for(var i = 0; i <passwordLength; i++){
        randomPassword += passChar.charAt(Math.floor(Math.random()*passChar.length));
    }
 
    var randomArray = randomPassword.split ('');

    for(var x = 0; x <constChar.length; x++){
        randomArray[x] = constChar[x];
    }
    randomPassword = randomArray.join('')

    return randomPassword;

}


