let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let display = document.getElementById("calculator-value");
let calculator = document.getElementById("calc");
let cleaner = document.getElementById("display-clean");
let historys = document.getElementById("element");
let deneme = document.getElementById("history-element-calc");
let result = document.getElementById("history-element-result");
function print() {
    display.value = display.value + this.value;
}

[...numbers].forEach(element => {
    element.addEventListener("click", print);
});

[...operators].forEach(element => {
    element.addEventListener("click", print);
});

calculator.addEventListener("click", calculate)

function calculate() {
    if (display.value != "") {

        historys.innerHTML += "<li><div><button id='history-element-calc' class='d-inline-block'>" + display.value + "</button>" + "=  " + "<button id='history-element-result' class='d-inline-block'>" + eval(display.value) + "</button></div>" + "</li>";
        display.value = eval(display.value);

    }

}

window.onkeydown = function (buttonenter) {
    if (buttonenter.keyCode == 13) {
        document.getElementById("calc").click();
    }
}

cleaner.addEventListener("click", clean);

function clean() {
    display.value = "";
}



deneme.addEventListener("click", printcal);


function printcal() {
    display.value = "";
}