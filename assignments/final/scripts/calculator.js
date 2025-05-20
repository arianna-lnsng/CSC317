function secureEval(expression) {
    const safePattern = /^[0-9+\-*/%.() ]+$/;
    if (!safePattern.test(expression)) {
        throw new Error("Invalid characters in expression.");
    }

    try {
        const result = Function('"use strict"; return (' + expression + ')')();
        if (!isFinite(result)) throw new Error("Divide by zero or invalid result.");
        return result;
    } catch {
        throw new Error("Error evaluating expression.");
    }
}

let currentExpression = "";
let justEvaluated = false
const outputElement = document.getElementById("result");

// Utility Buttons
document.getElementById("clear").addEventListener("click", () => {
    currentExpression = "";
    outputElement.textContent = "0";
    justEvaluated = false;
});

document.getElementById("positive-negative").addEventListener("click", () => {
    if (!currentExpression) return;

    let tokens = currentExpression.trim().split(/([\+\-\*\/])/);
    let last = tokens.pop().trim();

    if (last.startsWith("-")) last = last.slice(1);
    else last = "-" + last;

    tokens.push(last);
    currentExpression = tokens.join(" ");
    outputElement.textContent = currentExpression;
    justEvaluated = false;
});

document.getElementById("percentage").addEventListener("click", () => {
    if (currentExpression) {
        try {
            currentExpression = (secureEval(currentExpression) / 100).toString();
            outputElement.textContent = currentExpression;
            justEvaluated = true;
        } catch {
            outputElement.textContent = "Error";
            currentExpression = "";
            justEvaluated = false; 
        }
    }
});

// Operation Buttons
["divide", "multiply", "subtract", "add"].forEach(operatorId => {
    document.getElementById(operatorId).addEventListener("click", () => {
        const symbolMap = { divide: "/", multiply: "*", subtract: "-", add: "+" };
        const operator = symbolMap[operatorId];

        if (!currentExpression && operator !== "-") return;

        const trimmed = currentExpression.trim();
        const lastChar = trimmed.slice(-1);

        if ("+-*/".includes(lastChar)) {
            currentExpression = trimmed.slice(0, -1);
        }

        currentExpression += ` ${operator} `;
        outputElement.textContent = currentExpression;
        justEvaluated = false;
    });
});

document.getElementById("equals").addEventListener("click", () => {
    let trimmed = currentExpression.trim();
    if ("+-*/".includes(trimmed.slice(-1))) {
        trimmed = trimmed.slice(0, -1);
    }

    try {
        const result = secureEval(trimmed);
        const rounded = parseFloat(result.toFixed(12));
        outputElement.textContent = rounded;
        currentExpression = rounded.toString();
        justEvaluated = false;
    } catch {
        outputElement.textContent = "Error";
        currentExpression = "";
        justEvaluated = false;
    }
});

// Number Buttons
const numberButtons = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
numberButtons.forEach(id => {
    document.getElementById(id).addEventListener("click", () => {
        const digit = document.getElementById(id).textContent;

        if(justEvaluated) {
            currentExpression = "";
            justEvaluated = false;
        }
        // Prevent multiple leading zeros
        const tokens = currentExpression.trim().split(/[\+\-\*\/]/);
        const last = tokens[tokens.length - 1].trim();
        if (last === "0" && digit === "0") return;

        currentExpression += digit;
        outputElement.textContent = currentExpression;
    });
});

document.getElementById("decimal").addEventListener("click", () => {
    if(justEvaluated) {
        currentExpression = "0";
        justEvaluated = false;
    }

    const lastToken = currentExpression.split(/[\+\-\*\/ ]/).pop();
    if (!lastToken.includes(".")) {
        currentExpression += ".";
        outputElement.textContent = currentExpression;
    }
});

// Memory Buttons
document.addEventListener("DOMContentLoaded", () => {
    let memoryValue = 0;
    const display = document.getElementById("result");

    document.getElementById("mem-add").addEventListener("click", () => {
        memoryValue += parseFloat(display.textContent) || 0;
        justEvaluated = false; 
    });

    document.getElementById("mem-sub").addEventListener("click", () => {
        memoryValue -= parseFloat(display.textContent) || 0;
        justEvaluated = false; 
    });

    document.getElementById("mem-recall").addEventListener("click", () => {
        display.textContent = memoryValue;
        currentExpression = memoryValue.toString();
        justEvaluated = true; 
    });

    document.getElementById("mem-clear").addEventListener("click", () => {
        memoryValue = 0;
        justEvaluated = false; 
    });
});

// Keyboard Support
document.addEventListener("keydown", (event) => {
    const numberMap = {
        '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
        '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
    };

    if (numberMap[event.key]) {
        document.getElementById(numberMap[event.key]).click();
    }

    switch (event.key) {
        case '+': document.getElementById('add').click(); break;
        case '-': document.getElementById('subtract').click(); break;
        case '*':
        case 'x':
        case 'X': document.getElementById('multiply').click(); break;
        case '/': document.getElementById('divide').click(); break;
        case '%': document.getElementById('percentage').click(); break;
        case '.': document.getElementById('decimal').click(); break;
        case 'Enter':
        case '=':
            event.preventDefault();
            document.getElementById('equals').click();
            break;
        case '(':
        case ')':
            if(justEvaluated) {
                currentExpression = "0";
                justEvaluated = false;
            }
            currentExpression += event.key;
            outputElement.textContent = currentExpression;
            justEvaluated = false;
            break;
        case 'Escape':
        case 'c':
        case 'C': document.getElementById('clear').click(); break;
        case 'Backspace':
            if (currentExpression.length > 0) {
                currentExpression = currentExpression.slice(0, -1);
                outputElement.textContent = currentExpression || "0";
            }
            break;
    }

    if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
            case 'p': event.preventDefault(); document.getElementById('mem-add').click(); break;
            case 'm': event.preventDefault(); document.getElementById('mem-sub').click(); break;
            case 'r': event.preventDefault(); document.getElementById('mem-recall').click(); break;
            case 'l': event.preventDefault(); document.getElementById('mem-clear').click(); break;
        }
    }
});
