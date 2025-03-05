'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const stringToArray = sourceString.split(';');
  const fixedArray = stringToArray
    .map((phrase) => phrase.trim())
    .filter((phrase) => phrase.includes(' '));

  fixedArray.map((item) => {
    const splitedArray = item.split(':');

    result[splitedArray[0].trim()] = splitedArray[1].trim();
  });

  return result;
}

module.exports = convertToObject;
