const clearBtn = document.querySelector("#ac-btn");
const deleteBtn = document.querySelector("#del-btn");
const signBtn = document.querySelector("#sign-btn");

const value1 = document.querySelector("#operand1");
const value2 = document.querySelector("#operand2");
const operator = document.querySelector("#operator");

const number = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");

number.forEach(function(number) {
    number.addEventListener("click", () => {
        const clickedBtn = parseFloat(number.textContent);
        if(operator.textContent == "") {
            value1.textContent += clickedBtn;
        } else {
            value2.textContent += clickedBtn;
        }
    });
});

operatorBtn.forEach(function(operatorBtn) {
    operatorBtn.addEventListener("click", () => {
        const clickedOperator = operatorBtn.textContent;
        if(operator.textContent == "") {
            operator.textContent = operatorBtn.textContent;
        } else if (value2.textContent == "" && !operator.textContent == "") {
            operator.textContent = operatorBtn.textContent;
        } else {
            const firstValue = parseFloat(value1.textContent);
            const secondValue = parseFloat(value2.textContent);
            value1.textContent = operate(firstValue, secondValue);
            value2.textContent = "";
            operator.textContent = operatorBtn.textContent;
        }    
    });
});

function operate(a, b) {
    if (operator.textContent == '+') {
        return a + b;
    } else if (operator.textContent == '-') {
        return a - b;
    } else if (operator.textContent == '*') {
        return a * b;
    } else {
        return a/b;
    };
};


