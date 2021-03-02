const inputField = document.getElementById("inputField");
const time = document.getElementById("trend");
const memeME = document.getElementById("reddit");
const range = document.getElementById("range");
const t = document.getElementById("time");


var i = 0;





eventListeners();


function eventListeners() {

    document.addEventListener('DOMContentLoaded', myFunction);
    inputField.addEventListener("keypress", lookingInputField);
    memeME.addEventListener("click", memeTime);
    range.addEventListener("click", rangeValue);
    trend.addEventListener("click", showAnother);




}

function myFunction(e) {



}

function showAnother() {

    /*
    <select class="form-select" id="time" aria-label="Disabled select example">
        <option selected>Now</option>
        <option value="New">Today</option>
        <option value="This Week">This week</option>
        <option value="This Month">This Month</option>
        <option value="This Year">This Year</option>
        <option value="All Time">All Time</option>
    </select>

*/

    console.log(time.value);

    if (time.value === "Top") {
        console.log("se");
        var form = document.createElement("select");
        form.className = "form-select";
        form.id = "time";



        var option = document.createElement("option");
        option.value = "Now";
        option.text = "Now";
        form.appendChild(option);


        var option = document.createElement("option");
        option.value = "This Week";
        option.text = "This Week";
        form.appendChild(option);

        var option = document.createElement("option");
        option.value = "This Month";
        option.text = "This Month";
        form.appendChild(option);


        var option = document.createElement("option");
        option.value = "This Year";
        option.text = "This Year";
        form.appendChild(option);


        var option = document.createElement("option");
        option.value = "All Time";
        option.text = "All Time";
        form.appendChild(option);
       
        /*Bir döngü ile  de basitce ve daha az satırla halledirlebilir 
        ama ben böyle uygun gördüm
        */

        document.getElementById("input").appendChild(form);

       

      


    }

    else{
        t.remove();
    }


}


function lookingInputField(e) {

    time.disabled = false;



}

function memeTime() {
   

    document.getElementById("input").remove();
    fetch("https://www.reddit.com/r/LeagueOfMemes/new/.json?limit=4")
        .then(response => response.json())
        .then(data => {
            const datas = data.data;
            const children = datas.children;
            const meme = children[3].data;
            const subreddit = meme.subreddit;
            const title = meme.title;

            console.log(title);
        })

}


function rangeValue() {

    const span = document.getElementById("rangeValue").innerHTML = range.value;

}