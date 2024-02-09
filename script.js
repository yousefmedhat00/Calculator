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
        value1.textContent = number.textContent;
    });
});

operatorBtn.forEach(function(operatorBtn) {
    operatorBtn.addEventListener("click", () => {
        operator.textContent = operatorBtn.textContent;
    });
});

