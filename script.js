// Assignment Code
var generateBtn = document.querySelector("#generate");
//ask how many characters/length of password (between 8-128)
//ask if yes to lowercase,
//ask if yes to uppercase
//ask if yes to numbers
//ask if yes to special characters

//my code added 7-2-23:
var passwordLength = 0;
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = 0;
var specialChars = 0;

function start() {
  var start = confirm("If you're ready to generate a password, click OK");
  if (start) {
    minMaxPasswordLength();
  } else {
    sayGoodbye();
  }
  return;
}

function sayGoodbye() {
  alert("Come back again when you are ready to generate a new password.");
}

function minMaxPasswordLength() {
  var response = prompt(
    `How long do you want the password to be? Minimim length is 8 characters and maximum length is 128 characters.`
  );
  //var minMaxPasswordLength = confirm(
  // "How long do you want the password to be? Minimim length is 8 characters and maximum length is 128 characters."
  //);
  pwordLength = parseInt(response);

  if (minMaxPasswordLength) {
    lowercase();
  } else {
    sayGoodbye();
  }
}
//passwordLength = parseInt(response);

minMaxPasswordLength();

//generates random number
function getRandomNumber(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) + min);
  //return random;
}

getRandomNumber(8, 128);

//added below on 7-3-23
//console.log(lowercase[getRandomNumber(0,25)]); return random;

function passwordLength() {
  //var determinePasswordLength = getRandomNumber(8, 128);
  var response = confirm(
    "How long do you want the password to be? Minimim length is 8 characters and maximum length is 128 characters."
  );
}

function minMaxPasswordLength() {
  passwordLength = getRandomNumber(8, 128);
}
minMaxPasswordLength();
//minMaxPasswordLength = parseInt(response);

//if (minMaxPasswordLength > 128 || minMaxPasswordLength < 8) {
//alert("Invalid answer.Your password length is 8.");
//minMaxPasswordLength = 8;
//lowercase();
//}

function lowercase() {
  var response = confirm("Do you want to include lowercase letters?");
}

function uppercase() {
  var response = confirm("Do you want to include uppercase letters?");
}

function numbers() {
  var response = confirm("Do you want to include numbers?");
}

function specialChars() {
  var response = confirm("Do you want to include special characters?");
  return response;
}

//generatePassword(){
//var specialChars = askAboutCharacters()
//var yesToIncludingNumbers = askAboutNumbers()

//var finalPassword = generateFinalPassword();
//return finalPassword;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
start();

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
