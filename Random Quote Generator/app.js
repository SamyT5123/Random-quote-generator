const btnEl = document.querySelector("#btn");
const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");

const apiURL = "https://api.quotable.io/random"

async function getQuote () {

    try {
    authorEl.style.display = "block"
    btnEl.innerText = "loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "updating..."
    authorEl.innerText = "updating..."
    const response = await fetch(apiURL);
    const data = await response.json();

    btnEl.innerText = "Get a random quote"
    btnEl.disabled = false;
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "- " + quoteAuthor;
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error has happened, try again later"
        authorEl.style.display = "none"
        btnEl.disabled = false;
    }
    
}

getQuote();

btnEl.addEventListener("click", getQuote);