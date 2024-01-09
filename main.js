const quokeTitle = document.querySelector("h2");
const nameOfQuoke = document.querySelector("h3");
const randomQuokeBtn = document.querySelector("#quokeBtn");
const twitterPostBtn = document.querySelector("#twitter");
const loader = document.querySelector("#loader");
const container = document.querySelector(".quoke-container")
let quokeArray = []

const displayLoader = () => {
    loader.hidden = false;
    container.hidden = true;
};

const completLoader = () => {
    loader.hidden = true;
    container.hidden = false
};

completLoader()

async function getQuoke () {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try{
        const apiRespond = await fetch(apiUrl);
        quokeArray = await apiRespond.json();
    }
    catch(error) {
        alert("Quoke not loading");
    };
};

const randomQuoke = () => {
    displayLoader()
    getQuoke()
    completLoader()
    const randomNumber = Math.floor(Math.random() * quokeArray.length);
    quokeTitle.textContent = `" ${quokeArray[randomNumber].text} "`;
    nameOfQuoke.textContent = quokeArray[randomNumber].author;
};

const twitter = () => {
    const twitterUrl =  `https://twitter.com/intent/tweet?text=${quokeTitle.textContent}`
    window.open(twitterUrl,'_blank')
};

randomQuokeBtn.addEventListener('click', function() {
    randomQuoke()
});

twitterPostBtn.addEventListener('click', function() {
   twitter()  
});

