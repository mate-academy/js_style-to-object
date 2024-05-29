'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((everyLine) => everyLine.trim())
    .filter((line) => line.includes(':'))
    .reduce((accumulator, line) => {
      const [property, value] = line.split(':');

      accumulator[property.trim()] = value.trim();

      return accumulator;
    }, {});
}

module.exports = convertToObject;
