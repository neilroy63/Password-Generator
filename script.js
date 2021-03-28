var generateBtn = document.querySelector("#generate")

var numbers = "0123456789"
var specialCharacters = "!@#$%^&*()"
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLeters = lowercaseLetters.toUpperCase()

var validPassword = "" // a concat of the above vars


// vars for user input / choices
var numberOfCharacters = 0;
var includeNumbers = false;
var includeSpecialCharacters = false;
var includeLowercaseLetters = false;
var includeSpecialCharacters = false;
var includeUppecaseLetters = false;

// var for password string, the result of password function(s) below 
var password = "";

function generatePassword() {
    numberOfCharacters = prompt("How many characters would you like?");
    includeSpecialCharacters = confirm("Would you like special characters?");
    includeLowercaseLetters = confirm("Any lowercase letters?");
    includeUppecaseLetters = confirm ("How about upper case?");

    if (numberOfCharacters < 8 || numberOfCharacters > 128){
        return "Invalid input! Sorry, your password must contain at least 8 characters and be a maximum of 128 characters long! Please click the Generate Password button again."
    }
    
    
    if(!includeUppecaseLetters && !includeLowercaseLetters){
      return "Invalid input, Please select at least one uppercase or lowercase letter."
    }
    
    if(includeLowercaseLetters){
      validPassword = lowercaseLetters;
     }
    
     if(includeUppecaseLetters){
      validPassword = validPassword.concat(includeUppecaseLetters)
     }
    
     if (includeNumbers){
      validPassword = validPassword.concat(numbers)
     }
    
     if (includeSpecialCharacters){
      validPassword = validPassword.concat(specialCharacters)
       }
    
     for(var i = 0; i < numberOfCharacters ; i++){
       password +=  validPassword[Math.floor(Math.random() * validPassword.length)]
     }
      
     console.log(password)
    
      console.log(numberOfCharacters)
      console.log(includeUppecaseLetters)
      console.log(includeLowercaseLetters)
      console.log(includeSpecialCharacters)

      return password;
    }


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Event listener 
generateBtn.addEventListener("click", writePassword);
