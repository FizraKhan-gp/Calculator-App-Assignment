var result = "";

function number(value) {
    result = result + value;

    document.getElementById("result").innerText = result;
}
function clearAll() {
    result = "";
    document.getElementById("result").innerText = "0";
}

function calculate(operator) {
    var firstNumber = "";
    // var operator = "";
    var secondNumber = "";
    var result;


    if (operator === "+") {
        result = Number(firstNumber) + Number(secondNumber);
    }
    else if (operator === "-") {
        result = Number(firstNumber) - Number(secondNumber);
    }
    else if (operator === "*") {
        result = Number(firstNumber) * Number(secondNumber);
    }
    else if (operator === "/") {
        result = Number(firstNumber) / Number(secondNumber);
    }

    document.getElementById("result").innerText = result;
}
