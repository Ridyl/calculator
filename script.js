const buttonSelect = document.querySelectorAll('button');
const mainDisplay = document.querySelector('.display-main');
const bottomDisplay = document.querySelector('.display-bottom');
const topDisplay = document.querySelector('.display-top');

let num1 = null;
let num2 = null;
let answer = null;
let operand = null;

let continueOperation = null;


// Adding an event listener for each button of the calculator
// Will use ID of each button to determine value
for(let i = 0; i < buttonSelect.length; i++) {
    let buttonID = 0;
    let buttonClass = '';
    buttonSelect[i].addEventListener('click', (e) => {
        buttonID = e.target.getAttribute('id');
        buttonClass = e.target.getAttribute('class');
        if(continueOperation == null) {
            distribute(buttonID, buttonClass);
        }
    });
}

//Distributes all user actions correctly through code and 
//manipulates display appropriatley
function distribute(buttonID, buttonClass) {
    if (buttonClass === 'input-button') {display(buttonID);} 
    if (buttonClass === 'function') {abs(buttonID);}
    if (buttonClass === 'operand') {
        switch (buttonID) {
            case '+':
                num1 = bottomDisplay.textContent;
                operand = '+';
                topDisplay.textContent = num1 + ' ' + operand;
                bottomDisplay.textContent = '';
                break;
            case '/':
                num1 = bottomDisplay.textContent;
                operand = '/'
                topDisplay.textContent = num1 + ' ' + operand;
                bottomDisplay.textContent = '';
                break;
            case '*':
                num1 = bottomDisplay.textContent;
                operand = '*'
                topDisplay.textContent = num1 + ' ' + operand;
                bottomDisplay.textContent = '';
                break;
            case '-':
                num1 = bottomDisplay.textContent;
                operand = '-'
                topDisplay.textContent = num1 + ' ' + operand;
                bottomDisplay.textContent = '';
                break;
            case '%':
                num1 = bottomDisplay.textContent;
                operand = '%'
                topDisplay.textContent = num1 + ' ' + operand;
                bottomDisplay.textContent = '';
                break;
            case '=':
                num2 = bottomDisplay.textContent;
                topDisplay.textContent = num1 + ' ' + operand + ' ' + num2 + ' =';
                bottomDisplay.textContent = '';

                if (num1 != null && num2 != null && operand != null) {
                    answer = operate(operand, num1, num2);
                    bottomDisplay.textContent = answer;
                }
        }
    }
}

//standard bottom display output
function display(id) {
    bottomDisplay.textContent += `${id}`;
}

//All extra function button uses.
function abs(buttonID) {
    if (buttonID === 'power') {
        topDisplay.textContent = "Created By:"
        bottomDisplay.textContent = "Joey D'Alatri";
        setTimeout(hide, 2000);
    }

    if (buttonID === 'clear') {
        bottomDisplay.textContent = '';
        topDisplay.textContent = '';
        continueOperation = null;
    }

    if (buttonID === 'delete') {
        let str = bottomDisplay.textContent;
        bottomDisplay.textContent = bottomDisplay.textContent.substring(0, str.length - 1);
    }
}

//for welcome message timeout action.
function hide() {
    bottomDisplay.textContent = '';
    topDisplay.textContent = '';
}

//all math operations
function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}
function percent(percentNumber, number) {
    return (number * percentNumber) / 100;
}

//finalized operation function. Gathers all stored values and inputs them
//throughout proper functions.
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '/':
            if (b === 0) {return null;}
            else return divide(a, b);
        case '*':
            return multiply(a, b);
        case '-':
            return subtract(a, b);
        case '%':
            return percent(a, b);
        default:
            return null;
    }
}