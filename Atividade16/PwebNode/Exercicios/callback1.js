const prompt = require('prompt-sync')();

function saudacao(nome){
    console.log('OI '+ nome)
}

function entradaNome(callbak){
    let nome = prompt('Digite seu nome: ');
    callbak(nome);

}

entradaNome(saudacao);