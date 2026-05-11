function Rectangulo(altura, base) {
    this.altura = altura;
    this.base = base;

    this.MostraDados = function () {
        return this.base * this.altura;
    }
}

function calcRectangulo(idAltura, idBase) {
    if (validarCampo(idAltura) && validarCampo(idBase)) {
        Rectangulo1 = new Rectangulo(
            Number(document.getElementById(idAltura).value),
            Number(document.getElementById(idBase).value)
        );
        document.getElementById('resRectangulo').textContent =
            `A área do rectângulo é: ${Rectangulo1.MostraDados()}`;
    }
}


/////////////////////////////////////////////////////////////


class Conta {
    constructor() {
        this._nome = "";
        this._banco = "";
        this._numero = "";
        this._saldo = 0;
    }

    setNome(value) { this._nome = value; }
    getNome() { return this._nome; }

    setBanco(value) { this._banco = value; }
    getBanco() { return this._banco; }

    setNumero(value) { this._numero = value; }
    getNumero() { return this._numero; }

    setSaldo(value) { this._saldo = value; }
    getSaldo() { return this._saldo; }
}

class Corrent extends Conta {
    constructor() {
        super();
        this._SaldoEspecial = 0;
    }
    setSaldoEspecial(value) { this._SaldoEspecial = value; }
    getSaldoEspecial() { return this._SaldoEspecial; }
}

class Poupanca extends Conta {
    constructor() {
        super();
        this._Juros = 0;
        this._DataVencimento = "";
    }
    setJuros(value) { this._Juros = value; }
    getJuros() { return this._Juros; }

    setDataVencimento(value) { this._DataVencimento = value; }
    getDataVencimento() { return this._DataVencimento; }
}


function criarContas() {
    let nome = document.getElementById('entNome').value;
    let banco = document.getElementById('entBanco').value;
    let numero = document.getElementById('entNumero').value;
    let saldo = parseFloat(document.getElementById('entSaldo').value);

    let tipoSelecionado = document.querySelector('input[name="tipoConta"]:checked');
    let tipoConta = Number(tipoSelecionado.value);

    let res = document.getElementById('res');

    if (tipoConta === 0) {
        let contaC = new Corrent();

        if (validarCampo('entNome') && validarCampo('entBanco') &&
            validarCampo('entNumero') && validarCampo('entSaldo')) {

            contaC.setNome(nome);
            contaC.setBanco(banco);
            contaC.setNumero(numero);
            contaC.setSaldo(saldo);

            let saldoEspecial = parseFloat(document.getElementById('entEspecial').value);
            if (validarCampo('entEspecial')) {
                contaC.setSaldoEspecial(saldoEspecial);
            }

            res.innerHTML = `
                <strong> Conta Corrente</strong><br>
                Nome do Correntista: ${contaC.getNome()}<br>
                Banco: ${contaC.getBanco()}<br>
                Número da Conta: ${contaC.getNumero()}<br>
                Saldo: R$ ${contaC.getSaldo().toFixed(2)}<br>
                Saldo Especial (Cheque Especial): R$ ${contaC.getSaldoEspecial().toFixed(2)}
            `;
        }

    } else {
        let contaP = new Poupanca();

        if (validarCampo('entNome') && validarCampo('entBanco') &&
            validarCampo('entNumero') && validarCampo('entSaldo')) {

            contaP.setNome(nome);
            contaP.setBanco(banco);
            contaP.setNumero(numero);
            contaP.setSaldo(saldo);

            let juros = parseFloat(document.getElementById('entJuros').value);
            let dataVencimento = document.getElementById('entVencimento').value;

            if (validarCampo('entJuros') && validarCampo('entVencimento')) {
                contaP.setJuros(juros);
                contaP.setDataVencimento(dataVencimento);
            }

            res.innerHTML = `
                <strong> Conta Poupança</strong><br>
                Nome do Correntista: ${contaP.getNome()}<br>
                Banco: ${contaP.getBanco()}<br>
                Número da Conta: ${contaP.getNumero()}<br>
                Saldo: R$ ${contaP.getSaldo().toFixed(2)}<br>
                Taxa de Juros: ${contaP.getJuros()}%<br>
                Data de Vencimento: ${contaP.getDataVencimento()}
            `;
        }
    }
}


/////////////////////////////////////////////////////////
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