// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerals = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var numOfChars;
var yesToSpecialChars;
var areWeIncludingNumbers;
var areWeIncludingLowercase;
var areWeIncludingUppercase;

function start() {
  askLength();
  passwordParameters();
  return;
}

function askLength() {
  numOfChars = prompt(
    "How long do you want the password to be? Minimim length is 8 characters and maximum length is 128 characters."
  );
  characterTotal();
}

function passwordParameters() {
  areWeIncludingLowercase = confirm(
    "Do you want to include lowercase letters?"
  );
  areWeIncludingUppercase = confirm(
    "Do you want to include uppercase letters?"
  );
  areWeIncludingNumbers = confirm("Do you want to include numbers?");

  yesToSpecialChars = confirm("Do you want to include special characters?");
}
function characterTotal() {
  if (numOfChars < 8 || numOfChars > 128) {
    askLength();
  } else {
    return;
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePassword() {
  var options = ""; //stores options until ready to generate password; populate at end when click generate password button

  askLength();

  passwordParameters();

  //2-validate input (8-128 chars, at least one char type is selected)
  //3-generate password based on criteria

  //4-display generated password on the page--already done (below)
  if (yesToSpecialChars) {
    options = options + specialChars;
  }

  if (areWeIncludingNumbers) {
    options = options + numerals;
  }

  if (areWeIncludingLowercase) {
    options = options + lowercase;
  }

  if (areWeIncludingUppercase) {
    options = options + uppercase;
  }

  var finalPassword = "";

  for (let i = 0; i < parseInt(numOfChars); i++) {
    finalPassword = finalPassword + options[getRandomNumber(0, options.length)];
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //value of generatePassword is being stored in password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
