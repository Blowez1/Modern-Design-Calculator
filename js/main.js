let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let display = document.getElementById("calculator-value");
let calculator = document.getElementById("calc");
let cleaner = document.getElementById("display-clean");
let historys = document.getElementById("element");
let history_element= document.getElementsByClassName("history-element-calc");
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
        historys.innerHTML += "<li><div><input type='button' onmouseover='historystart()' class='history-element-calc' value='" + display.value + "'></input>" + "=  " + "<input type='button' onmouseover='historystart()' class='history-element-calc'  value='" + eval(display.value) + "'></input></div>" + "</li>";
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


function historystart(){

    for (let index = 0; index < history_element.length; index++) {
        history_element[index].addEventListener('click',function (){  display.value=this.value});
    }

}

window.onkeydown=function(tusbas){

    if (tusbas.keyCode==13) {
  
            document.getElementById("esittusu").click();
    }

    else if (tusbas.keyCode==96 ||tusbas.keyCode==48) {
        
        numbers[0].click();
    }

    else if (tusbas.keyCode==97 || tusbas.keyCode==49) {
        numbers[2].click();
    }

    else if (tusbas.keyCode==98 || tusbas.keyCode==50) {
        numbers[6].click();
    }

    else if (tusbas.keyCode==99 || tusbas.keyCode==51) {
        numbers[10].click();
    }

    else if (tusbas.keyCode==100 || tusbas.keyCode==52) {
        numbers[1].click();
    }

    else if (tusbas.keyCode==101 || tusbas.keyCode==53) {
        numbers[5].click();
    }

    else if (tusbas.keyCode==102 || tusbas.keyCode==54) {
        numbers[9].click();
    }

    else if (tusbas.keyCode==103 || tusbas.keyCode==55) {
        numbers[0].click();
    }

    else if (tusbas.keyCode==104 || tusbas.keyCode==56) {
        numbers[4].click();
    }

    else if (tusbas.keyCode==105 || tusbas.keyCode==57) {
        numbers[8].click();
    }
    else if (tusbas.keyCode==110) {
        numbers[7].click();
    }

    else if (tusbas.keyCode==107) {
        operators[0].click();
    }

    else if (tusbas.keyCode==109) {
        operators[1].click();
    }

    else if (tusbas.keyCode==106) {
        operators[2].click();
    }

    else if (tusbas.keyCode==111) {
        operators[3].click();
    }

    else if (tusbas.keyCode==27) {
        cleaner.click();
    }
    
}
