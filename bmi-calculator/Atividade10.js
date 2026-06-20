let resElemento;


function calcIMC() {
    resElemento = document.getElementById('ResIMC');
    let altura = Number(document.getElementById('entAltura').value.replace(',', '.'));
    let peso = Number(document.getElementById('entPeso').value);


    if (validarCampo('entAltura') && validarCampo('entPeso') ) {
        let imc = peso / Math.pow(altura, 2);

        document.getElementById('textIMC').textContent = `A sua Classificação ICM  de é `;
        resElemento.textContent = classificacaoIMC(imc);
    }

}

function classificacaoIMC(numeroIMC) {
    resElemento.classList.remove('cor-verde', 'cor-amarelo', 'cor-laranja', 'cor-vermelho', 'cor-azul');

    if (numeroIMC > 39.9) {
        resElemento.classList.add('cor-vermelho');
        return "Obesidade Grave"; 
    } else if (numeroIMC > 29.9) {
        resElemento.classList.add('cor-laranja');
        return "Obesidade";
    } else if (numeroIMC > 24.9) {
        resElemento.classList.add('cor-amarelo');
        return "Sobrepeso";
    } else if (numeroIMC > 18.5) {
        resElemento.classList.add('cor-verde');
        return "Normal";
    } else {
        resElemento.classList.add('cor-laranja');
        return "Magreza";
    }
}


function validarCampo(idDoInput) {
    let campo = document.getElementById(idDoInput);
    let valor = campo.value.trim();

    if (valor === ''   || valor <= 0 ) {
        campo.classList.add('input-erro');
        setTimeout(() => {
            campo.classList.remove('input-erro');
        }, 1000);
        return false;
    }

    return true;
}