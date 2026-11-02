var firstNumber = "";
var operator = "";
var secondNumber = "";

function number(value) {
    if (operator === "") {
        firstNumber = firstNumber + value;
        document.getElementById("result").innerText = Number(firstNumber);
    } else {
        secondNumber = secondNumber + value;
        document.getElementById("result").innerText = Number(secondNumber);
    }
}

function calculate(clickedOperator) {
    if (firstNumber !== "" && secondNumber !== "") {
        var num1 = Number(firstNumber);
        var num2 = Number(secondNumber);
        var total = 0;

        if (operator === "+") total = num1 + num2;
        if (operator === "-") total = num1 - num2;
        if (operator === "*") total = num1 * num2;
        if (operator === "/") total = num1 / num2;

        document.getElementById("result").innerText = total;

        firstNumber = total.toString();
        secondNumber = ""; 
    }

    if (clickedOperator !== undefined) {
        operator = clickedOperator;
    } else {
        operator = "";
    }
}

function clearAll() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    document.getElementById("result").innerText = "0";
}

function backspace() {
    if (operator === "") {
        firstNumber = firstNumber.slice(0, -1);
        document.getElementById("result").innerText = firstNumber || "0";
    } else {
        secondNumber = secondNumber.slice(0, -1);
        document.getElementById("result").innerText = secondNumber || "0";
    }
}





// var firstNumber ="" ;
// var operator= "" ;
// var secondNumber = "" ;
// // var result = "";
// function number(value) {
//     // Agar operator khali hy, is ka matlab user pehla number type kar raha hy
//     if (operator === "") {
//         firstNumber = firstNumber + value; // Number ko text ki tarah joro (e.g., "5" + "2" = "52")
//         document.getElementById("result").innerText = Number(firstNumber); // Shuru ka 0 hata kar screen par dikhao
//     } 
//     // Agar operator dab chuka hy, is ka matlab user doosra number type kar raha hy
//     else {
//         secondNumber = secondNumber + value; // Naye number ko doosre variable men joro
//         document.getElementById("result").innerText = Number(secondNumber); // Screen par doosra number dikhao
//     }
// }

// function calculate(clickedOperator) {
//     // Agar pehla aur doosra dono number maujood hain, to calculation karo
//     if (firstNumber !== "" && secondNumber !== "") {
//         var num1 = Number(firstNumber);
//         var num2 = Number(secondNumber);
//         var total = 0;

//         // Aap k HTML buttons ki nishaniyon k mutabiq calculation logic
//         if (operator === "+") {
//             total = num1 + num2;
//         }
//         else if (operator === "-" || operator === "−") { // Dono tarah k minus handle kar liye
//             total = num1 - num2;
//         }
//         else if (operator === "*" || operator === "×") { // Normal * aur HTML ka × dono handle kiye
//             total = num1 * num2;
//         }
//         else if (operator === "/" || operator === "÷") { // Normal / aur HTML ka ÷ dono handle kiye
//             total = num1 / num2;
//         }

//         // Jawab ko screen par dikhao
//         document.getElementById("result").innerText = total;

//         // Running Total Logic: Jawab ko hi agla pehla number bana do
//         firstNumber = total.toString();
//         secondNumber = ""; 
//     }

//     // Jo naya button dabaya hy, usay save karo
//     if (clickedOperator !== undefined) {
//         operator = clickedOperator; // Naya operator save karo
//     } else {
//         operator = ""; // Equal (=) dabane par operator khali kardo
//     }
// }

// // function clearAll() {
// //     result = "";
// //     document.getElementById("result").innerText = "0";
// // }

// // function backspace() {
    
// //     if (operator === "") {
// //         firstNumber = firstNumber.slice(0, -1);
// //     } else {
// //         secondNumber = secondNumber.slice(0, -1);
// //     }
    

// //     document.getElementById("result").innerText =
// //         firstNumber + operator + secondNumber;
// // }

// // // function backspace() {
// // //     var display = document.getElementById("result");

// // //     display.value = display.value.slice(0, -1);
// // // }

// // function calculate() {
// //     // var firstNumber = "";
// //     // // var operator = "";
// //     // var secondNumber = "";
// //     // var result;


// //     if (operator === "+") {
// //         result = Number(firstNumber) + Number(secondNumber);
// //     }
// //     else if (operator === "-") {
// //         result = Number(firstNumber) - Number(secondNumber);
// //     }
// //     else if (operator === "*") {
// //         result = Number(firstNumber) * Number(secondNumber);
// //     }
// //     else if (operator === "/") {
// //         result = Number(firstNumber) / Number(secondNumber);
// //     }

// //     document.getElementById("result").innerText = result;
// // }
// function calculate(){
//     var finalResult = 0 ;
//     var num1 = Number(firstNumber);
// var num2 = Number(secondNumber);
// var operation = "";

// if (operation === "+") {
//     console.log(num1 + num2);
// }

// if (operation === "-") {
//     console.log(num1 - num2);
// }

// if (operation === "*") {
//     console.log(num1 * num2);
// }

// if (operation === "/") {
//     console.log(num1 / num2);
// }

// if (operation === "%") {
//     console.log(num1 % num2);
// }
// document.getElementById("result").innerText = finalResult;
// }
// function calculate() {
//     if (firstNumber === "" || secondNumber === "" || operator === "") return;

//     var finalResult = 0;
//     var num1 = Number(firstNumber);
//     var num2 = Number(secondNumber);

//     if (operator === "+") {
//         finalResult = num1 + num2;
//     } else if (operator === "-") {
//         finalResult = num1 - num2;
//     } else if (operator === "*") {
//         finalResult = num1 * num2;
//     } else if (operator === "/") {
//         finalResult = num2 !== 0 ? num1 / num2 : "Error"; 
//         }

    
//     document.getElementById("result").innerText = finalResult;
// }