let displayValue = "0";
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    if (displayValue === "0") {
        displayValue = number; 
    } else {
        displayValue += number; 
    }
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue); 
    currentOperation = operation; 
    displayValue = "0"; 
}

function calculate() {
    if (currentOperation === null) return; 
    let secondOperand = parseFloat(displayValue); 
    switch (currentOperation) {
        case "+":
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case "-":
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case "*":
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case "/":
            displayValue = (firstOperand / secondOperand).toString();
            break;
    }
    currentOperation = null; 
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0"; 
    currentOperation = null; 
    firstOperand = null; 
    updateDisplay();
}

function suppressionDernier() {
    displayValue = displayValue.slice(0, -1) || "0"; 
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("calc-display").value = displayValue; 
}