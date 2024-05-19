// Variáveis para armazenar o número atual, o número anterior e a operação selecionada
let currentNumber = '';
let previousNumber = '';
let operation = null;

// Função para adicionar número ao display
function appendNumber(number) {
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}

// Função para definir a operação
function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

// Função para calcular o resultado da operação
function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result;
    operation = null;
    previousNumber = '';
    updateDisplay();
}

// Função para atualizar o display
function updateDisplay() {
    document.getElementById('display').innerText = currentNumber;
}

// Função para limpar o display
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}
