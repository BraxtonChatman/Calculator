
let calculatorContainer = document.querySelector("#calculatorContainer");
let calculatorScreen = document.querySelector("#calculatorScreen");
let clearScreenButton = document.createElement("button");
let numButtons = [];
for(let i=0; i<10; i++){
    let newNumButton = document.createElement("button");
    numButtons.push(newNumButton);
}
let decimalButton = document.createElement("button");

let addButton = document.createElement("button");
let subtractButton = document.createElement("button");
let multiplyButton = document.createElement("button");
let divideButton = document.createElement("button");
let equalsButton = document.createElement("button");