const inputField = document.getElementById("inputField");
const time = document.getElementById("trend");
var i =0;





eventListeners();


function eventListeners() {

    document.addEventListener('DOMContentLoaded', myFunction);
    inputField.addEventListener("keypress",lookingInputField);



}

function myFunction() {
console.log("selam");
   

}


function lookingInputField(e) {
   time.disabled = "";

   if(inputField.value.length === -1) {
       time.disabled=true;
   }

}