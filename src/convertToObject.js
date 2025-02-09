'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const propArr = sourceString;

  propArr
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line !== '' && line.includes(':'))
    .forEach((line) => {
      const [property, value] = line.split(/:\s*/);

      result[property.trim()] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
