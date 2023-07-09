const ArrayOfQuotes = [
  {
    authorQuote: 'Be yourself; everyone else is already taken.',
    authorName: 'Oscar Wilde',
  },
  {
    authorQuote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    authorName: 'Marilyn Monroe',
  },
  {
    authorQuote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    authorName: 'Albert Einstein',
  },
  {
    authorQuote: 'So many books, so little time.',
    authorName: 'Frank Zappa',
  },
  {
    authorQuote: 'A room without books is like a body without a soul.',
    authorName: 'Marcus Tullius Cicero',
  },
  {
    authorQuote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    authorName: 'Bernard M. Baruch',
  },
  {
    authorQuote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    authorName: 'William W. Purkey',
  },
  {
    authorQuote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    authorName: 'Dr. Seuss',
  },
  {
    authorQuote: 'You only live once, but if you do it right, once is enough.',
    authorName: 'Mae West',
  },
  {
    authorQuote: 'Be the change that you wish to see in the world.',
    authorName: 'Mahatma Gandhi',
  },
];

let lastRandomIndex = -1;

function generateQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * ArrayOfQuotes.length);
  } while (randomIndex === lastRandomIndex);

  lastRandomIndex = randomIndex;

  const quotePara = document.getElementById('quote');
  const authorPara = document.getElementById('author');
  const newQuoteBtn = document.querySelector('.btn');
  
  newQuoteBtn.classList.add('btn-animated');
  quotePara.textContent = `"${ArrayOfQuotes[randomIndex].authorQuote}"`;
  authorPara.textContent = `--${ArrayOfQuotes[randomIndex].authorName}`;
}
