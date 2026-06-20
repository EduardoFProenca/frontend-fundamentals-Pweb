function bntEnviar(event) {
    event.preventDefault();


    let radios = document.meuFormulario.elements['participacao'];



    if (validarCampo('entNome', 10) && validarCampo('mensagem', 20) && validarCampo('entEmail', 5)) {

        if (radios[1].checked == true) {
            alert("Que bom que você voltou a visitar esta página!");
        } else {
            alert("Volte sempre à está página!");
        }

        return true;
    } else {
        return false;
    }



}

function bntLimpar() {
    document.getElementById('meuFormulario').reset();
}

function validarCampo(idDoInput, tamanho) {
    let campo = document.getElementById(idDoInput);
    let valorSemEspacos = campo.value.replace(/\s+/g, '');
    let quantidade = valorSemEspacos.length;

    let spanErro = campo.nextElementSibling;

    if (quantidade < tamanho) {
        campo.classList.add('input-erro');
        if (spanErro) spanErro.style.display = 'block';

        campo.focus();
        setTimeout(() => {
            campo.classList.remove('input-erro');
        }, 1000);
        return false;
    }

    if (spanErro) spanErro.style.display = 'none';
    return true;
}