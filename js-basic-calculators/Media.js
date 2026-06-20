function capturarNota(){
    const nota1 = Number(document.getElementById('At1').value);
    const nota2 = Number(document.getElementById('At2').value);
    const nota3 = Number(document.getElementById('At3').value);
    const nota4 = Number(document.getElementById('At4').value);

    const mediaFinal = (nota1 + nota2 + nota3 + nota4 )/ 4;
    document.getElementById('media').textContent = mediaFinal;
    document.getElementById('ResNome').textContent = document.getElementById('nome').value;
    
}