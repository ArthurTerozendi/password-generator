function gerarSenha() {
    var alfabeto = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var simbolos = ['!', '@', '#', '%', '&', '*', '$'];
    
    var simQuant = parseInt(document.getElementById("quantidadeSimbolos").value);
    var letQuant = parseInt(document.getElementById("quantidadeLetra").value);
    var numQuant = parseInt(document.getElementById("quantidadeNum").value);

    var tamSenha = parseInt(document.getElementById("tamanhoSenha"));

    var simbSelecionados = getRandomArraySimbol(simbolos, simQuant);
    var letSelecionadas = getRandomArrayLetras(alfabeto, letQuant);
    var numSelecionaodos = getRandomArrayInt(numQuant);
    
    var senha = [];
    senha = senha.concat(simbSelecionados, letSelecionadas, numSelecionaodos);

    console.log(senha);
    senha.sort();
    console.log(senha);

    senha = getRandomArray(senha);

    var senhaString = "";

    for (let i = 0; i < senha.length; i++) {
        senhaString += senha[i] + "";
    }
    console.log(senhaString);
    document.getElementById('senha').innerHTML = `<p style="visibility: visible"> ${senhaString} </p>`;
}

function getRandomInt(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArraySimbol(simbolos, totalSimbolos){
    
    var simbSelect = [];
    for (var i = 0; i < totalSimbolos; i++){
        simbSelect[i] = simbolos[getRandomInt(simbolos.length)];
    }
    return simbSelect;

}

function getRandomArrayLetras(alfa, totLetras) {
    var letSelect = [];

    for (let i = 0; i < totLetras; i++) {
        letSelect[i] = alfa[getRandomInt(alfa.length)];
    }
    return letSelect;
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
    var valorTemp;
    while (tamanhoArray !== 0) {
        var rng = getRandomInt(array.length);
        var repetido = false;
        for (var i=0; i < array.length; i++) {
            if(rng === numAlet[i]) {
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
    console.log(numAlet);
    return arrayTemp;
}