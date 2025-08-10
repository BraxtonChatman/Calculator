let operand1 = "";
let operand2 = "";
let operator = "";
let calcResult = "";
let equalsLast = false;

// Fetch Buttons from DOM
let calculatorContainer = document.querySelector(".calculatorContainer");
let calculatorScreen = document.querySelector("#calculatorScreen");
calculatorScreen.value = "0";
let delButton = document.querySelector("#delButton");
let clearButton = document.querySelector("#clearButton");
let numButtons = [];
for(let i=0; i<10; i++){
    let numButtonId = "#numButton" + i;
    let numButton = document.querySelector(numButtonId);
    numButton.addEventListener("click", numClickListener);
    numButtons.push(numButton);
}
let decimalButton = document.querySelector("#decimalButton");
let equalsButton = document.querySelector("#equalsButton");
let operatorButtons = document.querySelectorAll(".opButton");

// Add Button Listeners
delButton.addEventListener("click", delClickListener);
clearButton.addEventListener("click", clearScreenClickListener);
decimalButton.addEventListener("click", decimalClickListener);
equalsButton.addEventListener("click", equalsClickListener);
operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", operatorClickListener);
})

// Declare Button Listeners
function delClickListener() {
    equalsLast = false;
    let screenVal = calculatorScreen.value;
    if(operand2==screenVal){
        (operand2.length > 1) ? operand2 = operand2.slice(0,-1): operand2 = "0";
    }
    else{
        console.log(`operand1: ${operand1}, operand1.length: ${operand1.length}`);
        (operand1.length > 1) ? operand1 = operand1.slice(0,-1): operand1 = "0";
        operator = "";
        operand2 = "";
    }
    (screenVal.length > 1) ? calculatorScreen.value = screenVal.slice(0, -1) : calculatorScreen.value = "0";
}

function clearScreenClickListener() {
    calculatorScreen.value = "";
    operand1 = "";
    operand2 = "";
    operator = "";
    calcResult = "";
}

function numClickListener(event) {
    if(equalsLast){
        equalsLast = false;
        operand1 = "";
        operator = "";
        operand2 = "";
        calcResult = "";
        calculatorScreen.value = "";
    }
    let num = event.target.id.at(-1);
    if(operator !== ""){
        if (operand2 === ""){
            calculatorScreen.value = "";
        }
        operand2 += num;
    }
    else {
        operand1 += num;
    }
    if(calculatorScreen.value === "0") calculatorScreen.value = "";
    calculatorScreen.value += num;
}

function decimalClickListener(){
    if(!calculatorScreen.value.includes(".")){
        calculatorScreen.value += ".";
        (operator === "") ? operand1 += "." : operand2 += ".";
    }
}

function equalsClickListener(){
    if(operator === "" && operand2 === "") return;
    operate();
    equalsLast = true;
}

function operatorClickListener(event){
    if(operator !== "" && operand2 !== "" && equalsLast === false){
        operate();
    }
    operator = event.target.id;
    operand2 = ""; 
    equalsLast = false;
}

function operate(){
    if(operand1 === "") operand1 = "0";
    if(operand2 === "") operand2 = operand1;

    switch(operator){
        case "divideButton":
            calcResult = doDivision();
            break;

        case "multiplyButton":
            calcResult = doMultiplication();
            break;

        case "subtractButton":
            calcResult = doSubtraction();
            break;

        case "addButton":
            calcResult = doAddition();
            break;
    }
    calcResult = calcResult.toString();

    calculatorScreen.value = calcResult
    if(calcResult.toString().length > 12){
        calculatorScreen.value = calcResult.toFixed(12);
    }
    operand1 = calcResult;
    calcResult = "";
}

function doDivision(){
    return (+operand1) / (+operand2);
}

function doMultiplication(){
    return (+operand1) * (+operand2);
}

function doSubtraction(){
    return (+operand1) - (+operand2);
}

function doAddition(){
    return (+operand1) + (+operand2);
}
