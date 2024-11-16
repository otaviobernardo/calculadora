let numeroAtual = '';  // Armazena o número que está sendo digitado no display
let numeroAnterior = '';  // Armazena o número anterior quando um operador é pressionado
let operadorAtual = '';  // Armazena o operador escolhido (+, -, *, /)

// Função para atualizar o valor exibido na tela
function atualizarTela(valor) {
    document.getElementById('display').value = valor; // Atualiza o campo de display com o valor passado
}

// Função para adicionar um número no display
function adicionarNumero(numero) {
    numeroAtual = numeroAtual + numero; // Adiciona o número ao final do valor atual
    atualizarTela(numeroAtual); // Atualiza o display
}

// Função para definir o operador escolhido
function definirOperador(operador) {
    numeroAnterior = numeroAtual;  // Armazena o número atual antes de realizar a operação
    operadorAtual = operador;  // Armazena o operador escolhido (+, -, *, /)
    numeroAtual = '';  // Limpa o número atual para começar a digitar o próximo número
    atualizarTela('');  // Limpa o display
}

// Função para calcular o resultado da operação
function calcularResultado() {
    let resultado; // Variável para armazenar o resultado da operação

    // Converte os números de string para float antes de realizar a operação
    const numero1 = parseFloat(numeroAnterior);  
    const numero2 = parseFloat(numeroAtual);  

    // Realiza a operação de acordo com o operador escolhido
    if (operadorAtual === '+') {
        resultado = numero1 + numero2;
    } else if (operadorAtual === '-') {
        resultado = numero1 - numero2;
    } else if (operadorAtual === '*') {
        resultado = numero1 * numero2;
    } else if (operadorAtual === '/') {
        resultado = numero1 / numero2;
    }

    // Atualiza o display com o resultado
    // Limpa as variáveis para permitir uma nova operação
    atualizarTela(resultado);
    numeroAnterior = '';
    numeroAtual = '';
    operadorAtual = '';
}

// Função para limpar o display e apagar os valores
function limparTela() {
    numeroAnterior = '';  // Limpa o número anterior
    numeroAtual = '';  // Limpa o número atual
    operadorAtual = '';  // Limpa o operador
    atualizarTela('');  // Limpa o display
}