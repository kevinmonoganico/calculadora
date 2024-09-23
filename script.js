const visor = document.getElementById('visor');
let entradaAtual = '';
let operador = '';
let primeiroNumero = null;


function adicionarAoVisor(valor) {
    if (['+', '-', '*', '/'].includes(valor)) {
        operador = valor;
        primeiroNumero = parseFloat(entradaAtual);
        entradaAtual = '';
    } else {
        entradaAtual += valor;
    }
    visor.value = entradaAtual || operador;
}


function calcularResultado() {
    if (primeiroNumero !== null && operador) {
        const segundoNumero = parseFloat(entradaAtual);
        let resultado = 0;

        switch (operador) {
            case '+':
                resultado = primeiroNumero + segundoNumero;
                break;
            case '-':
                resultado = primeiroNumero - segundoNumero;
                break;
            case '*':
                resultado = primeiroNumero * segundoNumero;
                break;
            case '/':
                if (segundoNumero !== 0) {
                    resultado = primeiroNumero / segundoNumero;
                } else {
                    visor.value = 'Erro';
                    return;
                }
                break;
        }

        visor.value = resultado;
        entradaAtual = resultado.toString();
        operador = '';
        primeiroNumero = null;
    }
}

function limparVisor() {
    entradaAtual = '';
    operador = '';
    primeiroNumero = null;
    visor.value = '';
}
