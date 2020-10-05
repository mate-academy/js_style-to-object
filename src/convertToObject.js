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
  const splitedString = sourceString.split(';');

  const splitedStringParts = splitedString
    .map(stringPart => stringPart.split(':'))
    .filter(stringPart => stringPart.length > 1);

  const objectFromStringParts = splitedStringParts
    .reduce((accumulatedStringParts, currentStringPart) => (
      {
        ...accumulatedStringParts,
        [currentStringPart[0].trim()]: currentStringPart[1].trim(),
      }
    ), {});

  return objectFromStringParts;
}

module.exports = convertToObject;
