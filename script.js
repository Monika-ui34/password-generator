var passwordBox = document.getElementById("password");
var lengthSlider = document.getElementById("length");
var lengthValue = document.getElementById("lengthValue");

var upperCheck = document.getElementById("uppercase");
var lowerCheck = document.getElementById("lowercase");
var numberCheck = document.getElementById("numbers");
var symbolCheck = document.getElementById("symbols");

// Show default slider value
lengthValue.innerHTML = lengthSlider.value;

// Update length value when slider moves
lengthSlider.oninput = function () {
    lengthValue.innerHTML = this.value;
};

function generatePassword() {

    var length = lengthSlider.value;

    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+[]{}<>?/";

    var allCharacters = "";

    if (upperCheck.checked) {
        allCharacters += upperChars;
    }

    if (lowerCheck.checked) {
        allCharacters += lowerChars;
    }

    if (numberCheck.checked) {
        allCharacters += numberChars;
    }

    if (symbolCheck.checked) {
        allCharacters += symbolChars;
    }

    if (allCharacters.length === 0) {
        alert("Please select at least one option!");
        return;
    }

    var password = "";

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }

    passwordBox.value = password;
}

function copyPassword() {

    if (passwordBox.value === "") {
        alert("Generate password first!");
        return;
    }

    passwordBox.select();
    document.execCommand("copy");

    alert("Password Copied Successfully!");
}