function capturarNota(){
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);
    
    const resSoma = `SOMA : ${num1} + ${num2} = ${num1 + num2}`;
    document.getElementById('soma').textContent = resSoma;

    const resSubtracao = `Subtracao : ${num1} - ${num2} = ${num1 - num2}`;
    document.getElementById('subtracao').textContent = resSubtracao;

    const resProduto = `Produto : ${num1} x ${num2} = ${num1 * num2}`;
    document.getElementById('produto').textContent = resProduto;

    const resDivisao = `Divisao : ${num1} / ${num2} = ${num1 / num2}`;
    document.getElementById('divisao').textContent = resDivisao;

    const resResto = `Resto : ${num1} % ${num2} = ${num1 % num2}`;
    document.getElementById('resto').textContent = resResto;

    
}