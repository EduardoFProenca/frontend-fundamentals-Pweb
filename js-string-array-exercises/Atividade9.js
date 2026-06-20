let TodosNumeros = [0, 0, 0];


function envNumerosMaior() {
    if (Numeros()) {
        const maior = Math.max(TodosNumeros[0], TodosNumeros[1], TodosNumeros[2]);
        document.getElementById('maiorNumero').textContent = `O maior número é: ${maior}`;
    }
}

function envNumeroOrdem() {
    if (Numeros()) {

        const ordenados = [...TodosNumeros].sort((a, b) => a - b);
        document.getElementById('maiorNumero').textContent = `Ordem crescente: ${ordenados.join(', ')}`;
    }
}

function envPalindromo() {
    if (validarCampo('text1')) {
        let palavra = document.getElementById('text1').value;
        let palavraNormalizada = Maiusculas(palavra).replace(/\s+/g, '');
        let palavraInvertida = palavraNormalizada.split('').reverse().join('');

        const ePalindromo = palavraNormalizada === palavraInvertida;
        document.getElementById('resPalindromo').textContent =
            `"${palavra}" ${ePalindromo ? 'é' : 'não é'} um palíndromo.`;
    }
}

function envSubconjunto() {
    let campo1 = document.getElementById('subconjunto1').value;
    let campo2 = document.getElementById('subconjunto2').value;

    if (validarCampo('subconjunto1') && validarCampo('subconjunto2')) {
        

        let texto1 = Maiusculas(campo1);
        let texto2 = Maiusculas(campo2);

        const eSubconjunto = texto1.includes(texto2);
        document.getElementById('resSubconjunto').textContent =
            `"${campo2}" ${eSubconjunto ? 'é um subconjunto' : 'não é um subconjunto'} de "${campo1}".`;
    }
    else{
        if (!campo1 || !campo2 || campo1.trim() === '' || campo2.trim() === '') {
            document.getElementById('resSubconjunto').textContent = 'erro';
            return;
        }
    }
}

function envData() {
    if (validarCampo('escData')) {

        let dataObj = new Date(document.getElementById('escData').value + 'T12:00:00');

        let semana = [
            "Domingo", "Segunda-feira", "Terça-feira",
            "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
        ];

        document.getElementById('resData').textContent =
            `O dia da semana é: ${semana[dataObj.getDay()]}`;
    }
}



function Numeros() {
    if (validarCampo('num1') && validarCampo('num2') && validarCampo('num3')) {
        TodosNumeros[0] = Number(document.getElementById('num1').value);
        TodosNumeros[1] = Number(document.getElementById('num2').value);
        TodosNumeros[2] = Number(document.getElementById('num3').value);
        return true;
    }
    return false;
}

function Maiusculas(palv) {
    return palv.toUpperCase();
}

function validarCampo(idDoInput) {
    let campo = document.getElementById(idDoInput);
    let valor = campo.value.trim();

    if (valor === '') {
        campo.classList.add('input-erro');
        setTimeout(() => {
            campo.classList.remove('input-erro');
        }, 1000);
        return false;
    }

    return true;
}