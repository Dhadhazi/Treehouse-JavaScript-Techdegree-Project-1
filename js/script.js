/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 Array of quotes, just add some more if you feel like it
***/
var quotes = [
	{
		quote : "It is not death that a man should fear, but he should fear never beginning to live.",
		source : "Marcus Aurelius",
		citation : "Meditations"
	},
	{
		quote : "I invited your best friend the companion cube. Of course, he couldn't come because you murdered him.",
		source : "glados",
		citation : "Portal 2",
		year : "2011" 
	},
	{
		quote : "All cruelty springs from weakness.",
		source : "Seneca the Younger"
	},
	{
		quote : "It is a good thing for an uneducated man to read books of quotations.",
		source : "Sir Winston Churchill",
		citation : "My early Life",
		year : "1930" 
	},
	{
		quote : "Seek freedom and become captive of your desires. Seek discipline and find your liberty.",
		source : "Frank Herbert",
		citation : "Chapterhouse: Dune",
		year : "1985" 
	}
];


/***
 Picking a random quote from the quotes array
***/
function getRandomQuote () {
	quoteNumber = Math.floor(Math.random() * quotes.length);
	return quotes[quoteNumber];
}


/***
 printing out the random quote that picked by getRandomQuote
***/
function printQuote() {
	quote = getRandomQuote();
	html = ""
	html += '<p class="quote">' + quote.quote + '</p>'
	html += '<p class="source">' + quote.source
	
	if (quote.citation!= undefined) {
		html += '<span class="citation">' + quote.citation + '</span>'
	}

	if (quote.year!= undefined) {
		html += '<span class="year">' + quote.year + '</span>'
	}
	
	html += '</p>'
	document.getElementById("quote-box").innerHTML=html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);