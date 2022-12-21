let body = document.querySelector('body');

let parent = document.querySelector('.row');
parent.classList.add("parent");





let getTopNewsStories = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    let data = await response.json();
    
    for(let i = 0; i < 100; i++){
        let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);
        let data2 = await response.json();
        makeCard(data2);
    }      
}
getTopNewsStories();




function makeCard(data){
    let child = document.createElement('div');
    child.className = ('col-sm-6');
    child.classList.add("child");
    parent.appendChild(child);

    //create html elements
    let card = document.createElement('div');
    card.className = "card";
    let cardBody = document.createElement('div');
    cardBody.className = "card-body";
    let cardTitle = document.createElement('h5');
    cardTitle.className = "card-title";
    let cardAnchor = document.createElement('a');
    let score = document.createElement('p');
    score.className = "card-text";
    let comments = document.createElement('p');
    comments.className = "card-text";
    let submittedBy = document.createElement('p');
    submittedBy.className = "card-text";
    let style = document.createElement('style');
    style.innerHTML = `.card {
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 5px #ccc;
    }`;


    
    cardAnchor.innerText =  `${data.title}`;
    cardAnchor.href = `${data.url}`;
    score.innerText = `Score: ${data.score}`;
    comments.innerText = `Comments: ${data.descendants}`;
    submittedBy.innerText = `Submitted by: ${data.by}`;


   
    cardTitle.appendChild(cardAnchor);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(score);
    cardBody.appendChild(comments);
    cardBody.appendChild(submittedBy);
    card.appendChild(cardBody);
    card.appendChild(style);
    child.appendChild(card);
    
}