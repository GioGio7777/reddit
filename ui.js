class UI {

    constructor(data, subreddit) {
        this.data = data
        this.subreddit = subreddit;


    }

    getValue(data, subreddit) {
        this.data = data;
        this.subreddit = subreddit;

    }

    userInterface() {
        document.getElementById("meme").innerHTML += ` 
        <div class="card" style="width: 40rem;">
        <img src="${this.data.image}" class="card-img-top" alt="error">
        <div class="card-body">
          <h5 class="card-title">${this.data.author}</h5>
          <p class="card-text">${this.data.title}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Upvote:${this.data.upvote}</li>
          
        </ul>
        <div class="card-body">
          <a href="https://www.reddit.com/r/${this.subreddit}/comments/${this.data.id}/${this.data.title}/" target ="_blank" class="card-link"><img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png" alt="GO TO POST" style="width:42px;height:42px;"></a>
        </div>
      </div>
      </div>
`;

        document.getElementById("meme").innerHTML += "<br>";
        document.getElementById("meme").innerHTML += "<br>";
        document.getElementById("meme").innerHTML += "<br>";

    }



}