const inputField = document.getElementById("inputField");
const time = document.getElementById("trend");
const memeME = document.getElementById("reddit");
const range = document.getElementById("range");
const t = document.getElementById("time");
//import UI from "./ui";
const ui = new UI();



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

        /*Bir döngü ile  de basitce ve daha az satırla halledilebilir 
        ama ben böyle uygun gördüm.
        */

        document.getElementById("input").appendChild(form);






    }




}


function lookingInputField(e) {

    time.disabled = false;



}

function memeTime() {



    var subre = inputField.value;
    var tt = time.value;
    var rng = Number(range.value);

    document.getElementById("input").remove();
    fetch(`https://www.reddit.com/r/${subre}/${tt}/.json?limit=${rng}`)
        .then(response => response.json())
        .then(data => {

            for (var j = 0; j < rng; j++) {

                const datas = data.data;
                const children = datas.children;
                const meme = children[j].data;
                const subreddit = meme.subreddit;
                const title = meme.title;
                const upvote = meme.ups;
                const image = meme.url;
                const id = meme.id;
                const author = meme.author;






                console.log(image);
                

            /*   try {
                    document.getElementById("meme").innerHTML += ` 
        <div class="card" style="width: 40rem;">
        <img src="${image}" class="card-img-top" alt="error">
        <div class="card-body">
          <h5 class="card-title">${author}</h5>
          <p class="card-text">${title}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Upvote:${upvote}</li>
          
        </ul>
        <div class="card-body">
          <a href="https://www.reddit.com/r/${subre}/comments/${id}/${title}/" target ="_blank" class="card-link">Go to post </a>
        </div>
      </div>
      </div>
`;
                    document.getElementById("meme").innerHTML += "<br>";

                } catch (err) {


                }

                */



                var mem = {
                    subreddit: subreddit,
                    title: title,
                    upvote: upvote,
                    image: image,
                    id: id,
                    author: author

                };

                ui.getValue(mem, subre);
             ui.userInterface();





            }
        })

}


function rangeValue() {

    const span = document.getElementById("rangeValue").innerHTML = range.value;

}