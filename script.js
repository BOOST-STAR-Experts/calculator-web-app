let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }

    currentInput += value;
    updateDisplay();
}

function performOperation(operator) {
    if (currentOperator !== '') {
        calculateResult();
    }

    currentOperator = operator;
    currentInput += ` ${operator} `;
    updateDisplay();
}

function calculateResult() {
    const parts = currentInput.split(' ');
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[2]);

    if (isNaN(num1) || isNaN(num2)) {
        clearDisplay();
        return;
    }

    switch (currentOperator) {
        case '+':
            currentInput = (num1 + num2).toString();
            break;
        case '-':
            currentInput = (num1 - num2).toString();
            break;
        default:
            return;
    }

    currentOperator = '';
    resultDisplayed = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    resultDisplayed = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}
