var firstNumber ;
var operator ;
var secondNumber ;
var result;
// var result = "";

function number(value) {
    result = result + value;

    document.getElementById("result").innerText = result;
}
function clearAll() {
    result = "";
    document.getElementById("result").innerText = "0";
}

function backspace() {
    
    if (operator === "") {
        firstNumber = firstNumber.slice(0, -1);
    } else {
        secondNumber = secondNumber.slice(0, -1);
    }
    

    document.getElementById("result").innerText =
        firstNumber + operator + secondNumber;
}

// function backspace() {
//     var display = document.getElementById("result");

//     display.value = display.value.slice(0, -1);
// }

function calculate(operator) {
    // var firstNumber = "";
    // // var operator = "";
    // var secondNumber = "";
    // var result;


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
