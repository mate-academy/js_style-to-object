'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arraySplit = sourceString.split(';');
  const arrayMap = arraySplit.map((string) => [
    string.slice(0, string.indexOf(':')).trim(),
    string.slice(string.indexOf(':') + 1).trim(),
  ]);
  const arrayFilter = arrayMap.filter((array) => array[0] !== '');

  return createObject(arrayFilter);
}

function createObject(array) {
  const result = {};

  for (const insideArray of array) {
    result[insideArray[0]] = insideArray[1];
  }

  return result;
}

module.exports = convertToObject;
