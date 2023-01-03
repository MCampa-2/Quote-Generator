// API url https://jacintodesign.github.io/quotes-api/data/quotes.json //

// Get Quotes From API

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("button-quote");
const loader = document.getElementById("loader");


let apiQuotes = [];

// Loading

function loadingContainer(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Complete Loading

function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function newQuote(){
    loadingContainer();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    if(quote.text > 120){
        quoteText.classList.add("long-quote");
    }else{
        quoteText.classList.remove("long-quote");
    }

    quoteText.textContent = quote.text;


    authorText.textContent = quote.author;

    complete();
}

async function getQuotes(){
    loadingContainer();
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        
    }catch(error){
        
    }
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

twitterButton.addEventListener("click", tweetQuote);
newQuoteButton.addEventListener("click", newQuote);


getQuotes();

