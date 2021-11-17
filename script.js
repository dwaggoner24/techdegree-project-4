/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array = contains the quotes, source, citation, date, and tags for random quotes found online
 * quote = the actual quote spoken, in string form
 * source = the person who spoke the quote, in string form
 * citation = where or in what format the quote was obtained 
 * year = the year quote was spoken
 * tags = the specific catagory the quote fits under
***/
const quotes = [
  {
    quote: 'Believe you can and you are halfway there.',
    source: 'Theodore Roosevelt',
    tags: 'Motivation'
  },
  {
    quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    source: 'Albert Einstein',
    tags: 'Motivation'
  },
  {
    quote: 'My mission in life is not merely to survive, but to thrive.',
    source: 'Maya Angelou',
    tags: 'Inspirational'
  },
  {
    quote: 'There are years that ask questions and years that answer.',
    source: 'Zora Neale Hurston',
    citation: 'Their Eyes Were Watching God'
  },
  {
    quote: 'Pay attention to the present, you can improve upon it.',
    source: 'Paulo Coelho',
    citation: 'The Alchemist'
  },
  {
    quote: 'Out of the mountain of despair, a stone of hope.',
    source: 'Martin Luther King, Jr.',
    citation: '"I have a Dream" Speech',
    year: '1963'
  },
  {
    quote: 'Anyone who has never made a mistake has never tried anything new.',
    source: 'Albert Einstein'
  },
  {
    quote: 'Towering genius distains a beaten path. It seeks regions hitherto unexplored.',
    source: 'Abraham Lincoln',
    citation: 'Lyceum Address',
    year: '1838'
  },
  {
    quote: 'Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.',
    source: 'Lady Gaga',
    tags: 'Inspirational'
  },
  {
    quote: 'I want to be in the arena. I want to be brave with my life. And when we make the choice to dare greatly, we sign up to get our asses kicked. We can choose courage or we can choose comfort, but we can’t have both. Not at the same time.',
    source: 'Brene Brown'
  },
  {
    quote: 'No matter what people tell you, words and ideas can change the world.',
    source: 'Robin Williams as John Keating',
    citation: 'Dead Poets Society'
  },
  {
    quote: 'When it comes to luck, you make your own.',
    source: 'Bruce Springsteen',
    tags: 'Motivational'
  },
  {
    quote: 'I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.',
    source: 'Rose Parks'
   } ]; 


/***
 * `getRandomQuote` function
 * randomNumber = the variable is assign to any random number that is generated
 * What should be returned in is the random quote assigned to the random number
***/
function getRandomQuote(){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

console.log(getRandomQuote());



/**
 * timer = a function that allows the quote to be changes in intervals of 5000 milliseconds.
 * resource for function: W3 schools website
 */

const timer = setInterval(printQuote, 5000);
/**const background = () => document.body.style.backgroundColor = randoRgb(rgb);



/***
 * `printQuote` function
 * randomQuote = the quote that is randomly generated after being taken form the array.
 * displayQuoteHTMl = what should be displayed on the browswer when the code runs.
 * if conditionals are set for year, citation, and tags. Those should show if any of that information is present.
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let displayQuoteHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
    `;
    if (randomQuote.citation){
      displayQuoteHTML += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year){
      displayQuoteHTML += `<span class="year">${randomQuote.year}</span>`;
    }
    if (randomQuote.tags){
      displayQuoteHTML += `<span class="citation">${randomQuote.tags}</span>`;
    }
  displayQuoteHTML += `</p>`;

document.getElementById('quote-box').innerHTML = displayQuoteHTML;
  }


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);