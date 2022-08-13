const pesoAm = document.getElementById("peso-amount");
const resetBtn = document.getElementById("reset");
const curButtons = document.querySelectorAll("#currency");
const result = document.getElementById("result");

const amount = {
    'us' : 0.018,
    'eu' : 0.0178,
    'yen' : 2.40,
    'won' : 23.41,
    'bra' : 0.091,
    'bhat' : 0.63,
    'rup' : 1.43,
    'dir' : 0.066
}

let curVal

const value = () => {
    curButtons.forEach(button => {
        button.addEventListener("click", () => {
            curVal = amount[button.value];
            resultDisplay();
        })
    })
    return curVal;
}

value();

const pesoConvert =  () =>{ 
    const peso = Number(pesoAm.value);

    return peso
}

const resultDisplay = () => {
    const actualConvert = pesoConvert() * value();
    let curDesc

    if(value() == 0.018) {
        curDesc = "USD"
    } else if(value() == 0.0178) {
        curDesc = "EUR"
    } else if(value() == 2.40) {
        curDesc = "YEN"
    } else if(value() == 23.41) {
        curDesc = "WON"
    } else if(value() == 0.091) {
        curDesc = "BRL"
    } else if(value() == 0.63) {
        curDesc = "BHAT"
    } else if(value() == 1.43) {
        curDesc = "RUP"
    } else if(value() == 0.066)
        curDesc = "DIR"

    result.value = `PHP ${pesoConvert().toFixed(2)} = ${curDesc} ${actualConvert.toFixed(2)}`;
}

resetBtn.onclick = () => {
    result.value = ""
    pesoAm.value = ""
}
