function mudarAberta(id) {
    document.getElementById(id).src = './img/img_JanelaAberta.png';
    document.getElementsByTagName('h1')[0].innerText = 'Janela aberta!';

    let som = new Audio('./som/som_de_rangido_janela_abrindo.mp3');
    som.play();

}

function mudarFechada(id ) {
    document.getElementById(id).src = './img/img_JanelFechada.png';
    document.getElementsByTagName('h1')[0].innerText = 'Janela Fechada!';
}

function mudarQuebrada(id) {
    document.getElementById(id).src = './img/img_JanelaQuebrada.png';
    document.getElementsByTagName('h1')[0].innerText = 'Janela Quebrada!';


    let som = new Audio('./som/som_janela_sendo_quebrada.mp3');
    som.play();
}


