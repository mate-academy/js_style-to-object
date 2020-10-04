'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(stringPart => stringPart.split(':'))
    .filter(stringPart => stringPart.length > 1)
    .reduce((accumulatedStringParts, currentStringPart) => (
      {
        ...accumulatedStringParts,
        [currentStringPart[0].trim()]: currentStringPart[1].trim(),
      }
    ), {});
}

module.exports = convertToObject;
