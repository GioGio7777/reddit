const inputField = document.getElementById("inputField");
const time = document.getElementById("trend");
const memeME = document.getElementById("reddit");
const range = document.getElementById("range");
var i = 0;





eventListeners();


function eventListeners() {

    document.addEventListener('DOMContentLoaded', myFunction);
    inputField.addEventListener("keypress", lookingInputField);
    memeME.addEventListener("click", memeTime);
    range.addEventListener("click", rangeValue);



}

function myFunction() {


}


function lookingInputField(e) {
    time.disabled = "";

    if (inputField.value.length === -1) {
        time.disabled = true;
    }

}

function memeTime() {
    console.log(range.value);
    document.getElementById("input").remove();
   

}


function rangeValue() {

    const span = document.getElementById("rangeValue").innerHTML = range.value;

}