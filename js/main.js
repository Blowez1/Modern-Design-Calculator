let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let display = document.getElementById("calculator-value");
let calculator = document.getElementById("calc");
let cleaner = document.getElementById("display-clean");
let historys = document.getElementById("element");

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

        historys.innerHTML += "<li class='history-element d-inline-block'>" + display.value + " = " + eval(display.value) + "</li>";
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