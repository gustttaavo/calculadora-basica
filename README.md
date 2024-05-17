# Calculadora Básica

Este é um projeto simples de uma calculadora web que realiza as quatro operações básicas: adição, subtração, multiplicação e divisão. O objetivo deste projeto é demonstrar uma aplicação básica utilizando HTML, CSS e JavaScript.

## Funcionalidades

- **Adição**: Soma dois números.
- **Subtração**: Subtrai um número de outro.
- **Multiplicação**: Multiplica dois números.
- **Divisão**: Divide um número pelo outro, com tratamento de erro para divisão por zero.
- **Interface Gráfica**: Interface simples e intuitiva para inserção dos números e seleção da operação.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Estrutura do Projeto

- `index.html`: Arquivo HTML principal que contém a estrutura da calculadora.
- `assets/style.css`: Arquivo CSS para estilização da página.
- `assets/script.js`: Arquivo JavaScript com as funções de cálculo e manipulação da interface.

## Como Usar

1. Clone o repositório para sua máquina local:

    ```sh
    git clone https://github.com/seuusuario/calculadora-basica.git
    ```

2. Navegue até a pasta do projeto:

    ```sh
    cd calculadora-basica
    ```

3. Abra o arquivo `index.html` no seu navegador preferido.

## Funcionalidades Detalhadas

### Interface Gráfica

A interface gráfica consiste em dois campos de entrada para os números, uma lista de seleção para escolher a operação e um botão para calcular o resultado.

```html
<div class="calculate-container">
    <h1>Calculadora</h1>
    <input type="number" id="num1" placeholder="Primeiro número">
    <select id="operação">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="number" id="num2" placeholder="Segundo número">
    <button onclick="calculate()">Calcular</button>
    <h2 id="result">Resultado: </h2>
</div>
Funções de Cálculo
As funções de cálculo estão definidas no arquivo script.js. Elas realizam as operações básicas e lidam com erros como a divisão por zero.

javascript
Copiar código
function soma(a, b) {
    return a + b;
}

function subtração(a, b) {
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
Estilização
A estilização básica é definida no arquivo style.css e fornece um layout simples e limpo para a calculadora.

css
Copiar código
body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.calculate-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.calculate-container h1 {
    margin-bottom: 20px;
}

input[type="number"], select, button {
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
Contribuição
Se você quiser contribuir para o projeto, por favor, faça um fork do repositório, crie um branch para suas modificações e envie um pull request.

Faça um fork do projeto.
Crie um branch com a nova funcionalidade (git checkout -b feature/nova-funcionalidade).
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade').
Envie para o branch (git push origin feature/nova-funcionalidade).
Abra um pull request.
