function pocesConverter(idEnt){
 if(validarCampo(idEnt)){
    let texto = document.getElementById(idEnt).value;
    let resTexto;
    if( document.getElementById('entMaiusculas').checked){
        resTexto = texto.toUpperCase();
    }else{
         resTexto = texto.toLowerCase();
    }
    document.getElementById('res').textContent =
            `Conversão: ${resTexto}`;
 }
}


function validarCampo(idDoInput) {
    let campo = document.getElementById(idDoInput);
    let valor = campo.value.trim();

    if (valor === '' || valor == ' ') {
        campo.classList.add('input-erro');
        campo.focus();
        setTimeout(() => {
            campo.classList.remove('input-erro');
        }, 1000);
        return false;
    }

    return true;
}

