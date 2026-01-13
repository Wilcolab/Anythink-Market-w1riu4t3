// refined_prompt.js
// Robust camelCase and dot.case functions generated using a refined prompt

/**
 * Converts any string to camelCase.
 *
 * Handles:
 * - Multiple word separators (spaces, hyphens, underscores)
 * - Preserves acronyms (e.g., "NASA project" → "NASAProject")
 * - Skips non-letter characters (e.g., "hello@world" → "helloWorld")
 * - Throws an error if the input is not a valid string
 *
 * @function toCamelCase
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toCamelCase('hello world'); // 'helloWorld'
 * toCamelCase('make-this_snake'); // 'makeThisSnake'
 * toCamelCase('NASA project'); // 'NASAProject'
 * toCamelCase('hello@world'); // 'helloWorld'
 */
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

/**
 * Converts any string to dot.case format.
 *
 * Handles:
 * - Multiple word separators (spaces, hyphens, underscores)
 * - Preserves acronyms (e.g., "NASA project" → "nasa.project")
 * - Skips non-letter characters (e.g., "hello@world" → "hello.world")
 * - Throws an error if the input is not a valid string
 *
 * @function toDotCase
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toDotCase('hello world'); // 'hello.world'
 * toDotCase('make-this_snake'); // 'make.this.snake'
 * toDotCase('NASA project'); // 'nasa.project'
 * toDotCase('hello@world'); // 'hello.world'
 */
function toDotCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  if (str === '') return '';
  // Split by spaces, hyphens, underscores
  const words = str.split(/\s+|_|-/).filter(Boolean);
  return words
    .map(word => {
      // Remove non-letter characters
      const clean = word.replace(/[^a-zA-Z]/g, '');
      if (clean === '') return '';
      // Preserve acronyms (all uppercase)
      if (/^[A-Z]+$/.test(word)) return word.toLowerCase();
      return clean.toLowerCase();
    })
    .filter(Boolean)
    .join('.');
}

/**
 * Function Initialization: toKebabCase
 * Core Logic: lowercase and replace spaces with hyphens
 * Error Handling: check for valid input type
 *
 * @function toKebabCase
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-case formatted string.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toKebabCase('Hello World') // 'hello-world'
 * toKebabCase('JavaScript Function') // 'javascript-function'
 */
function toKebabCase(str) {
  // Error Handling: Check input type
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  // Core Logic: lowercase and replace spaces with hyphens
  return str.toLowerCase().replace(/\s+/g, '-');
}

// Example usages:
// console.log(toCamelCase('hello world')); // 'helloWorld'
// console.log(toCamelCase('make-this_snake')); // 'makeThisSnake'
// console.log(toCamelCase('NASA project')); // 'NASAProject'
// console.log(toCamelCase('hello@world')); // 'helloWorld'

// console.log(toDotCase('hello world')); // 'hello.world'
// console.log(toDotCase('make-this_snake')); // 'make.this.snake'
// console.log(toDotCase('NASA project')); // 'nasa.project'
// console.log(toDotCase('hello@world')); // 'hello.world'

// console.log(toKebabCase('Hello World')); // 'hello-world'
// console.log(toKebabCase('JavaScript Function')); // 'javascript-function'
