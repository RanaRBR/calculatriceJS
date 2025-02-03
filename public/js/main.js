let displayValue = "";
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
    currentOperation = operation; 
    displayValue = ""; 
}

function calculate() {
    if (currentOperation === null || displayValue === "") return; 
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
        case "%":
            displayValue = (firstOperand % secondOperand).toString();
            break;
    }
    updateDisplay();
    currentOperation = null; 
}

function clearDisplay() {
    displayValue = ""; 
    currentOperation = null; 
    firstOperand = null; 
    updateDisplay(); 
}

function suppressionDernier() {
    displayValue = displayValue.slice(0, -1); 
    if (displayValue === "") {
        displayValue = "0"; 
    }
    updateDisplay(); 
}

function updateDisplay() {
    document.getElementById("calc-display").value = displayValue || "0"; 
}