var senha = true;
function gerarSenha() {
    var alfabeto = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var alfabetoMai = [];
    var simbolos = ['!', '@', '#', '%', '&', '*', '$'];
    
    var simQuant = parseInt(document.getElementById("quantidadeSimbolos").value);
    var letQuant = parseInt(document.getElementById("quantidadeLetra").value);
    var numQuant = parseInt(document.getElementById("quantidadeNum").value);
    var letMaiQuant = parseInt(document.getElementById("quantidadeLetrasMai").value);

    var tamSenha = parseInt(document.getElementById("tamanhoSenha"));

    var simbSelecionados = getRandomArraySimbol(simbolos, simQuant);
    var letSelecionadas = getRandomArrayLetras(alfabeto, letQuant);
    var numSelecionaodos = getRandomArrayInt(numQuant);
    var letMaiSelecionadas = getRandomArrayLetrasMai(getAlfabetoMai(alfabeto, alfabetoMai), letMaiQuant);
    
    var senha = [];
    senha = senha.concat(simbSelecionados, letSelecionadas, numSelecionaodos, letMaiSelecionadas);

    senha = getRandomArray(senha);

    var senhaString = "";

    for (let i = 0; i < senha.length; i++) {
        senhaString += senha[i] + "";
    }
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

function getRandomArrayLetrasMai(alfaMai, totLetrasMai) {
    var letSelect = [];

    for (let i = 0; i < totLetrasMai; i++) {
        letSelect[i] = alfaMai[getRandomInt(alfaMai.length)];
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
    return arrayTemp;
}

function getAlfabetoMai(alfabeto, alfabetoMai) {
    for (let i = 0; i < alfabeto.length; i++) {
        let alfaMai = alfabeto[i];
        alfabetoMai[i] = alfaMai.toUpperCase();
    }
    return alfabetoMai;
}

function toggleTypePassword (){
    senha = !senha;
    console.log(senha)
    if (senha) {
        document.getElementById('senhaAnagrama').style.visibility = "hidden";
        document.getElementById('senhaPadrao').style.visibility = "visible";
    } else {
        document.getElementById('senhaAnagrama').style.visibility = "visible";
        document.getElementById('senhaPadrao').style.visibility = "hidden";
    }
}