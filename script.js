let buffer = '2';
let display = '0';
let maxcharacters = 9;

function action(symbol) {

    switch (symbol) {
        case 'clear':
            console.log("Clear");
            buffer = '0';
            display = '0';
            let temp = document.getElementsByClassName('display');
            temp[0].innerHTML = buffer;
            break;
        case 'back':
            back();
            break;
        case 'div':
            divide();
            break;

            default:
                addToDisplay(symbol);


    }
}





/*
back
div
mult
minus
plus
equals
*/
function back() {
    let temp = document.getElementsByClassName("display");
    if (temp[0].innerHTML.length == 0)
        return;
    temp[0].innerHTML = temp[0].innerHTML.substring(0, temp[0].innerHTML.length - 1);
}

function divide() {
    let temp = document.getElementsByClassName('display');
    let total = (temp[0].innerHTML / buffer);
    console.log("buffer: " + buffer + " display: " + temp[0].innerHTML);
    console.log(total);
}

function multiply() {

}

function subtract() {

}

function add() {

}

function equals() {

}

function addToDisplay(number) {
    let temp = document.getElementsByClassName('display');
    if (temp[0].innerHTML.length > maxcharacters)
        return;
    temp[0].innerHTML += number;
}