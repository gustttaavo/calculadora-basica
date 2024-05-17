function soma(a, b) {
    return a + b;
}

function subtraçaõ(a, b) {
    return a - b;
}

function multiplicação(a, b) {
    return a * b;
}

function divisão(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero";
    }
    return a / b;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operação').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Erro: Por favor, insira números válidos";
    } else {
        switch (operation) {
            case '+':
                result = soma(num1, num2);
                break;
            case '-':
                result = subtração(num1, num2);
                break;
            case '*':
                result = multiplicação(num1, num2);
                break;
            case '/':
                result = divisão(num1, num2);
                break;
            default:
                result = "Operação inválida";
        }
    }
    
    document.getElementById('result').innerText = "Resultado: " + result;
}