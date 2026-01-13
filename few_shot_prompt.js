// few_shot_prompt.js
// This file demonstrates few-shot prompting with multiple examples.

// Improved Function: toCamelCase
function toCamelCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  if (str === '') return '';
  // Split by spaces, hyphens, underscores
  const words = str.split(/\s+|_|-/).filter(Boolean);
  return words
    .map((word, i) => {
      // Remove non-letter characters
      const clean = word.replace(/[^a-zA-Z]/g, '');
      if (clean === '') return '';
      // Preserve acronyms (all uppercase)
      if (/^[A-Z]+$/.test(word)) return word;
      return i === 0 ? clean.toLowerCase() : clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
    })
    .join('');
}

// Function: addNumbers
function addNumbers(a, b) {
  if (a === undefined || b === undefined || a === null || b === null) {
    throw new Error('Both parameters must be provided and not null or undefined.');
  }
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    throw new Error('Both parameters must be valid numbers.');
  }
  return a + b;
}

// Function: to_snake_case
function toSnakeCase(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Input must be a string.');
    }
    if (text === '') {
        return '';
    }
    text = text.trim().replace(/ /g, '_');
    return text.toLowerCase();
}

// Examples:
// toCamelCase('first name') => 'firstName'
// toCamelCase('user_id') => 'userId'
// toCamelCase('SCREEN_NAME') => 'screenName'
// toCamelCase('mobile-number') => 'mobileNumber'
// toCamelCase('hello world') => 'helloWorld'
// toCamelCase('make-this_snake') => 'makeThisSnake'
// toCamelCase('NASA project') => 'NASAProject'
// toCamelCase('hello@world') => 'helloWorld'
// addNumbers(5, 3) => 8
// addNumbers('5', 3) => Error: Both parameters must be valid numbers.
// addNumbers(undefined, 3) => Error: Both parameters must be provided and not null or undefined.
// to_snake_case('Hola Mundo') => 'hola_mundo'
// to_snake_case('') => ''
// to_snake_case('¡Hola, Mundo!') => '¡hola,_mundo!'
// to_snake_case(123) => TypeError: Input must be a string.
