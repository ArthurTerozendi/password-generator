var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '%', '&', '*', '$'];

function generatePassword() {
    var passwordLength = parseInt(document.getElementById("numberCharacter").value);
    var uppercase = document.getElementById("uppercase").checked;
    var number = document.getElementById("number").checked;
    var specialCharacter = document.getElementById("specialCharacter").checked;

    var numberOpt = getNumberOpt(specialCharacter, uppercase, number);
    var ratio = numberOpt === 1 ? 0 : numberOpt === 2 ? 0.4 : numberOpt === 3 ? 0.3 : 0.2
    var length = Math.round(passwordLength * ratio) == 0 ? 1 : Math.round(passwordLength * ratio);
    var lengthChars = passwordLength - (length * (numberOpt - 1));
    var selectedSpecialCharacters = [];
    var selectedNumbers = [];
    var selectedUpperChars = [];

    if (specialCharacter) selectedSpecialCharacters = getRandomArraySimbol(length);
    if (number) selectedNumbers = getRandomArrayInt(length);
    if (uppercase) selectedUpperChars = getRandomArrayUpperCases(getAlphabetUppercase(), length);
    var selectedChars = getRandomArrayChars(lengthChars);

    var senha = selectedChars.concat(selectedSpecialCharacters, selectedNumbers, selectedUpperChars);

    document.getElementById("resultPassword").value = getRandomArray(senha).join("");;
}

function getNumberOpt(specialCharacter, uppercase, number) {
    var n = 1;
    if (specialCharacter) n++;
    if (uppercase) n++;
    if (number) n++;
    return n;
}

function getRandomInt(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArraySimbol(length) {
    var simbSelect = [];
    for (var i = 0; i < length; i++) {
        simbSelect[i] = specialCharacters[getRandomInt(specialCharacters.length)];
    }
    return simbSelect;
}

function getRandomArrayChars(length) {
    var selectedChars = [];
    for (let i = 0; i < length; i++) {
        selectedChars[i] = alphabet[getRandomInt(alphabet.length)];
    }
    return selectedChars;
}

function getRandomArrayUpperCases(alphabetUppercase, length) {
    var selectedChars = [];
    for (let i = 0; i < length; i++) {
        selectedChars[i] = alphabetUppercase[getRandomInt(alphabetUppercase.length)];
    }
    return selectedChars;
}

function getRandomArrayInt(totNum) {
    var numSelect = [];
    for (let i = 0; i < totNum; i++) {
        numSelect[i] = getRandomInt(10).toString();
    }
    return numSelect;
}

function getRandomArray(array) {
    var numAlet = [];
    var tamanhoArray = array.length;
    while (tamanhoArray !== 0) {
        var rng = getRandomInt(array.length);
        var repetido = false;
        for (var i = 0; i < array.length; i++) {
            if (rng === numAlet[i]) {
                repetido = true;
                break;
            }
        }
        if (!repetido) {
            numAlet.push(rng);
            tamanhoArray--;
        }
    }
    var arrayTemp = [];
    for (let i = 0; i < array.length; i++) {
        arrayTemp[i] = array[numAlet[i]];
    }
    return arrayTemp;
}

function getAlphabetUppercase() {
    return alphabet.map(c => c.toUpperCase());
}