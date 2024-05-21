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
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <title>Calculadora</title>
</head>
<body>
    <!-- Container principal da calculadora -->
    <div class="calculator-container">
        <h1>Calculadora</h1>
        
        <!-- Display da calculadora -->
        <div class="display" id="display">0</div>
        
        <!-- Container dos botões -->
        <div class="buttons">
            
            <!-- Botões dos números -->
            <div class="numbers">
                <button onclick="appendNumber(1)">1</button>
                <button onclick="appendNumber(2)">2</button>
                <button onclick="appendNumber(3)">3</button>
                <button onclick="appendNumber(4)">4</button>
                <button onclick="appendNumber(5)">5</button>
                <button onclick="appendNumber(6)">6</button>
                <button onclick="appendNumber(7)">7</button>
                <button onclick="appendNumber(8)">8</button>
                <button onclick="appendNumber(9)">9</button>
                <button onclick="appendNumber(0)">0</button>
            </div>
            
            <!-- Botões das operações -->
            <div class="operations">
                <button onclick="setOperation('+')">+</button>
                <button onclick="setOperation('-')">-</button>
                <button onclick="setOperation('*')">*</button>
                <button onclick="setOperation('/')">/</button>
                <button onclick="calculate()">=</button> <!-- Botão para calcular o resultado -->
                <button onclick="clearDisplay()">C</button> <!-- Botão para limpar o display -->
            </div>
        </div>
    </div>
    
    <!-- Script JavaScript -->
    <script src="assets/script.js"></script>
</body>
</html>

Funções de Cálculo
As funções de cálculo estão definidas no arquivo script.js. Elas realizam as operações básicas e lidam com erros como a divisão por zero.

javascript
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

Estilização
A estilização básica é definida no arquivo style.css e fornece um layout simples e limpo para a calculadora.

css
body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.calculator-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 300px;
}

.calculator-container h1 {
    margin-bottom: 20px;
}

.display {
    background-color: #222;
    color: #fff;
    font-size: 2em;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: right;
}

.buttons {
    display: flex;
}

.numbers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.operations {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

button {
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #ddd;
}

Contribuição
Se você quiser contribuir para o projeto, por favor, faça um fork do repositório, crie um branch para suas modificações e envie um pull request.

Faça um fork do projeto.
Crie um branch com a nova funcionalidade (git checkout -b feature/nova-funcionalidade).
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade').
Envie para o branch (git push origin feature/nova-funcionalidade).
Abra um pull request.

##Levantamento de Requisitos para Calculadora Simples
#Funcionalidades Principais:
Adição
O usuário deve ser capaz de somar dois números.
Exibir o resultado imediatamente após a operação.
Subtração
O usuário deve ser capaz de subtrair dois números.
Exibir o resultado imediatamente após a operação.
Multiplicação
O usuário deve ser capaz de multiplicar dois números.
Exibir o resultado imediatamente após a operação.
Divisão
O usuário deve ser capaz de dividir dois números.
Exibir o resultado imediatamente após a operação.
Tratar casos de divisão por zero, exibindo uma mensagem de erro apropriada.
Requisitos Não Funcionais:
Usabilidade
A interface deve ser intuitiva e fácil de usar.
Os botões das operações devem ser claramente identificáveis.
Desempenho
As operações devem ser realizadas rapidamente, sem atrasos perceptíveis.
Compatibilidade
A calculadora deve funcionar em diferentes navegadores e dispositivos.
Segurança
Validar a entrada do usuário para evitar operações inválidas.
Separação dos Requisitos em Sprints
Sprint 1: Estrutura e Interface Básica
Objetivo: Criar a interface inicial da calculadora e configurar o ambiente de desenvolvimento.

Configurar o projeto (estrutura de arquivos, ferramentas, etc.).
Criar a interface de usuário (HTML/CSS):
Campo de entrada para números.
Botões para operações (adição, subtração, multiplicação e divisão).
Área para exibição do resultado.
Implementar validação básica de entrada (somente números).
Sprint 2: Funcionalidades de Adição e Subtração
Objetivo: Implementar as operações de adição e subtração.

Desenvolver a lógica para a operação de adição.
Desenvolver a lógica para a operação de subtração.
Conectar os botões de adição e subtração com as funções correspondentes.
Testar e corrigir erros nas operações de adição e subtração.
Sprint 3: Funcionalidades de Multiplicação e Divisão
Objetivo: Implementar as operações de multiplicação e divisão.

Desenvolver a lógica para a operação de multiplicação.
Desenvolver a lógica para a operação de divisão.
Conectar os botões de multiplicação e divisão com as funções correspondentes.
Implementar o tratamento de erros para divisão por zero.
Testar e corrigir erros nas operações de multiplicação e divisão.
Sprint 4: Refinamentos e Testes Finais
Objetivo: Melhorar a usabilidade e a performance, e realizar testes finais.

Refinar a interface de usuário (melhorar o layout e o design).
Otimizar o código para melhor desempenho.
Realizar testes de usabilidade.
Realizar testes de compatibilidade em diferentes navegadores e dispositivos.
Documentar o projeto (comentários no código, manual de uso, etc.).
