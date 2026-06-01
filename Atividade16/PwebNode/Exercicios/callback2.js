function exibeMensagensNaOrdem(mensagem,callbak){
    console.log(mensagem);
    callbak();
}

exibeMensagensNaOrdem('Essa é a primera mensagem exebida na ondem', function(){
    console.log('essa é a segunda mesagem na ondem')
})


