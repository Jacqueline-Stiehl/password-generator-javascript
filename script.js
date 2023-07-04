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
