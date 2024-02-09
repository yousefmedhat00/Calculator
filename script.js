const clearBtn = document.querySelector("#ac-btn");
const deleteBtn = document.querySelector("#del-btn");
const signBtn = document.querySelector("#sign-btn");
const equalBtn = document.querySelector(".equal-btn")
const decimalBtn = document.querySelector(".decimal-btn");

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
        if(value1.textContent == ""){
            alert("ERROR! \n Insert Value first!");
        } else if(operator.textContent == "") {
            operator.textContent = operatorBtn.textContent;
        } else if (value2.textContent == "" && !operator.textContent == "") {
            operator.textContent = operatorBtn.textContent;
        } else {
            const firstValue = parseFloat(value1.textContent);
            const secondValue = parseFloat(value2.textContent);
            value1.textContent = parseFloat(operate(firstValue, secondValue).toFixed(3));
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
        if(b == 0) {
            alert("You can't really divide by zero, you should know that.")
            value2.textContent = "";
        } else {
            return a/b;
        };
    };
};

clearBtn.addEventListener("click", () => {
    value1.textContent = "";
    value2.textContent = "";
    operator.textContent = "";
});

equalBtn.addEventListener("click", () => {
    const firstValue = parseFloat(value1.textContent);
    const secondValue = parseFloat(value2.textContent);
    value1.textContent = parseFloat(operate(firstValue, secondValue).toFixed(3));
    value2.textContent = "";
    operator.textContent = "";
});

deleteBtn.addEventListener("click", () => {
    if (!value2.textContent == "") {
        newArray = value2.textContent.split("");
        newArray.pop();
        value2.textContent = newArray.join("");
    } else if (!operator.textContent == "") {
        operator.textContent = "";
    } else {
        newArray = value1.textContent.split("");
        newArray.pop();
        value1.textContent = newArray.join("");
    }
});

signBtn.addEventListener("click", () => {
    if (!value2.textContent == "" && !value2.textContent.includes("-")) {
        value2.textContent = "-" + value2.textContent;
    } else if (!value2.textContent == "" && value2.textContent.includes("-")) {
        value2.textContent = value2.textContent.replace("-", "");
    } else if (!value1.textContent == "" && !value1.textContent.includes("-") && operator.textContent == "" ) {
        value1.textContent = "-" + value1.textContent;
    } else if (!value1.textContent == "" && value1.textContent.includes("-") && operator.textContent == "") {
        value1.textContent = value1.textContent.replace("-", "");
    }
});

decimalBtn.addEventListener("click", () => {
    if (!value2.textContent == "" && !value2.textContent.includes(".")) {
        value2.textContent += ".";
    } else if (!value1.textContent == "" && !value1.textContent.includes(".") && operator.textContent == "") {
        value1.textContent += ".";
    }
});
    
