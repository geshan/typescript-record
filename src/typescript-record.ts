type Quote = {
  quote: string,
  author: string
}

type id = 1 | 2 | 3 | 4 | 5;

type QuotesList = Record<id, Quote>;

const quotes:QuotesList = {
  1: {
    quote: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
    author: 'Bjarne Stroustrup'
  },
  2: {
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler'
  },
  3: {
    quote: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson'
    },
  4: {
    quote: 'Java is to JavaScript what car is to Carpet.',
    author: 'Chris Heilmann'
    },
  5: {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    author: 'John Woods'
    },
}

if (3 in quotes) {
  console.log(`quotes: `, quotes[3]);
}
