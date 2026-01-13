// chain_prompt.js
// Chain prompt: Implementing a kebab-case converter step-by-step

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
// console.log(toKebabCase('Hello World')); // 'hello-world'
// console.log(toKebabCase('JavaScript Function')); // 'javascript-function'
