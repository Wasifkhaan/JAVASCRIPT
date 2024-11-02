let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function chooseOperator(op) {
    if (currentInput === '' && firstOperand === null) return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentInput !== '') {
        calculate();
        firstOperand = parseFloat(currentInput);
    }
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}

function calculate() {
    if (firstOperand !== null && currentInput !== '') {
        let secondOperand = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
                break;
            default:
                return;
        }

        currentInput = result.toString();
        updateDisplay(currentInput);
        firstOperand = null;
        operator = '';
    }
}
