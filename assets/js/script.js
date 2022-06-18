// Assignment code here
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = [" ", "!", "", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "\\", "^", "_", "{", "}", "|", "~"];
var allCharacters = [lowercaseLetters, uppercaseLetters, numericNumbers, specialCharacters];

var combinedArray;

var includeLower;
var includeUpper;
var includeNumber;
var includeSpecial;

function generatePassword() {
    var length = prompt("How long do you want the password to be?");
    console.log(length);

    if (length < 8 || length > 128) {
        alert("Password must be between 8 and 128 characters!");
        return generatePassword();
    } else {
        prompts();
    }

    if (includeLower) {
        combinedArray.addRange(lowercaseLetters);
        var storeLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];

        return storeLower;
    }

    if (includeUpper) {
        combinedArray.addRange(uppercaseLetters);
        var storeUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        //Generate at least one from these if included
    }

    if (includeNumber) {
        combinedArray.addRange(numericNumbers);
        var storeNumber = numericNumbers[Math.floor(Math.random() * numericNumbers.length)];
    }

    if (includeSpecial) {
        combinedArray.addRange(specialCharacters);
        var storeSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }


    //Return 1 from each selected as well as all extra characters from combinedArray,
    //use Math.random to randomize position
    return storeLower + storeUpper + storeNumber + storeSpecial;

    //Loop as many times as needed for number of characters and use combinedArray as the array to pull from
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
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);