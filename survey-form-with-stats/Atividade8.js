let contagemSexo = [0, 0, 0];
let contagemOpiniao = [0, 0, 0, 0];

let totaIdade = 0;
let maiorIdade, menorIdade;

let quantidade = 0;

function envPesquisa() {

    let sexoSelecionado = Number(document.querySelector('input[name="sexo"]:checked').value);
    let opiniaoSelecionada = Number(document.querySelector('input[name="opiniao"]:checked').value);
    let idade = Number(document.getElementById('anos').value);
    totaIdade += idade;

    switch (opiniaoSelecionada) {
        case 1:
            contagemOpiniao[0]++;
            break;

        case 2:
            contagemOpiniao[1]++;
            break;

        case 3:
            contagemOpiniao[2]++;
            break;

        case 4:
            contagemOpiniao[3]++;
            break

        default:
            break;
    }


    switch (sexoSelecionado) {
        case 0:
            contagemSexo[0]++;
            break;
        case 1:
            contagemSexo[1]++;
            break;
        case 2:
            contagemSexo[2]++;
            break;
        default:
            break;
    }


    maiorIdade = calcularMaior(idade, maiorIdade);
    menorIdade = calcularMenor(idade, menorIdade);


    const meuForm = document.getElementById('meu-formulario');
    meuForm.reset();

    quantidade++;

    resultado();
}


function resultado() {
    const resIdade = `Média da idade das pessoas que responderam ao questionário: ${(totaIdade / quantidade).toFixed(1)} anos`;
    document.getElementById('mediaIdade').textContent = resIdade;

    const resMaisVelha = `A idade da pessoa mais velha: ${maiorIdade} anos`;
    document.getElementById('maisVelha').textContent = resMaisVelha;

    const resMaisNova = `A idade da pessoa mais nova: ${menorIdade} anos`;
    document.getElementById('maisNova').textContent = resMaisNova;

    const resQntdPessimo = `Quantidade de pessoas que responderam péssimo: ${contagemOpiniao[0]}`;
    document.getElementById('quantidadePessimo').textContent = resQntdPessimo;

    const resPoctOtimoBom = `Porcentagem de pessoas que responderam ótimo e bom: ${((contagemOpiniao[3] + contagemOpiniao[2]) / quantidade * 100).toFixed(1)}%`;
    document.getElementById('porcentagemOtimoBom').textContent = resPoctOtimoBom;

    const resnNumSexo = `Número de mulheres, homens e outros que responderam: mulheres: ${contagemSexo[1]}, homens: ${contagemSexo[2]}, outros: ${contagemSexo[0]}`;
    document.getElementById('numSexo').textContent = resnNumSexo;

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}



const calcularMaior = (idade, ref) => (ref === undefined || idade > ref) ? idade : ref;
const calcularMenor = (idade, ref) => (ref === undefined || idade < ref) ? idade : ref;





