// let monChamp = document.getElementById('champ');

// function ajout(input) {
//     if (monChamp.value === '0') {
//         monChamp.value = input;
//     } else {
//         monChamp.value += input;
//     }
// }

// function suppression() {
//     monChamp.value = '0'
// }

// function calculer() {

// }

// function suppressionDernier() {
//     if (monChamp.value.length > 1) {
//         monChamp.value = monChamp.value.slice(0, -1);
//     } else {
//         monChamp.value = '0';
//     }
// }

// let displayValue = "";
// let currentOperation = null;
// let firstOperand = null;

// function appendNumber(number) {
//   displayValue += number;
//   updateDisplay();
// }

// function setOperation(operation) {
//   if (currentOperation !== null) {
//     calculate();
//   }
//   firstOperand = parseFloat(displayValue);
//   currentOperation = operation;
//   displayValue = "";
// }

// function calculate() {
//   if (currentOperation === null || displayValue === "") return;
//   let secondOperand = parseFloat(displayValue);
//   switch (currentOperation) {
//     case "+":
//       displayValue = (firstOperand + secondOperand).toString();
//       break;
//     case "-":
//       displayValue = (firstOperand - secondOperand).toString();
//       break;
//     case "*":
//       displayValue = (firstOperand * secondOperand).toString();
//       break;
//     case "/":
//         displayValue = (firstOperand / secondOperand).toString();
//         break
//   }
//   updateDisplay();
//   currentOperation = null;
// }

// function clearDisplay() {
//     displayValue = "";
//     currentOperation = null;
//     firstOperand = null;
//     updateDisplay();
// }

// function updateDisplay() {
//     document.getElementById("calc-display").value = displayValue;

// }
let displayValue = "";
let currentOperation = null;
let firstOperand = null;


function suppressionDernier() {
    displayValue = displayValue.slice(0 -1);
    if (displayValue === "") {
        displayValue = "0"; 
    }
    updateDisplay(); 
}



function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
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

function updateDisplay() {
    document.getElementById("calc-display").value = displayValue || "0"; 
}

