const quotes = [
    {
        quote: "text1",
        author: "name",
    },
    {
        quote: "text2",
        author: "name",
    },
    {
        quote: "text3",
        author: "name",
    },
    {
        quote: "text4",
        author: "name",
    },
    {
        quote: "text5",
        author: "name",
    },
    {
        quote: "text6",
        author: "name",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;