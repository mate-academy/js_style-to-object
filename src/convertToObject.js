'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.includes(':'))
    .reduce((acc, str) => {
      const [key, value] = str.split(':').map((part) => part.trim());

      acc[key] = value;

      return acc;
    }, {});

  return styles;
}

module.exports = convertToObject;
