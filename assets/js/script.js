// Assignment code here
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = [" ", "!", "", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "\\", "^", "_", "{", "}", "|", "~"];
var allCharacters = [lowercaseLetters, uppercaseLetters, numericNumbers, specialCharacters];

var combinedArray = [];

var includeLower;
var includeUpper;
var includeNumber;
var includeSpecial;

function generatePassword() {
    var passwordLength = prompt("How long do you want the password to be?");
    console.log(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters!");
        return generatePassword();
    } else {
        prompts();
    }

    var storeLower = "";
    var storeUpper = "";
    var storeNumber = "";
    var storeSpecial = "";

    if (includeLower) {
        combinedArray = combinedArray.concat(lowercaseLetters);
        storeLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }

    if (includeUpper) {
        combinedArray = combinedArray.concat(uppercaseLetters);
        storeUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        //Generate at least one from these if included
    }

    if (includeNumber) {
        combinedArray = combinedArray.concat(numericNumbers);
        storeNumber = numericNumbers[Math.floor(Math.random() * numericNumbers.length)];
    }

    if (includeSpecial) {
        combinedArray = combinedArray.concat(specialCharacters);
        storeSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

    //Return 1 from each selected as well as all extra characters from combinedArray,
    //use Math.random to randomize position
    var password = storeLower + storeUpper + storeNumber + storeSpecial;
    var characterCount = password.length;

    for (var i = characterCount; i < passwordLength; i++) {
        password += combinedArray[Math.floor(Math.random() * combinedArray.length)];
    }

    return password;
}

var prompts = function() {
    includeLower = window.confirm("Would you like to include lowercase letters?");

    includeUpper = window.confirm("Would you like to include uppercase letters?");

    includeNumber = window.confirm("Would you like to include numbers?");

    includeSpecial = window.confirm("Would you like to include special characters?");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    console.log(password);

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);