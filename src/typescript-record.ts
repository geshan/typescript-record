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
  // 5: { //will show a syntax error - An object literal cannot have multiple properties with the same name.ts(1117)
  //   quote: 'Truth can only be found in one place: the code.',
  //   author: 'Robert C. Martin'
  // }
  
  // 6: { // error - Object literal may only specify known properties, and '6' does not exist in type 'QuotesList'.ts(2322)
  //   quote: 'SQL, Lisp, and Haskell are the only programming languages that I’ve seen where one spends more time thinking than typing.',
  //   author: 'Philip Greenspun'
  // }
}

if (3 in quotes) {
  console.log(`quotes: `, quotes[3]);
}
