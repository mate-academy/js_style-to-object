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
  const result = {};

  const arr = sourceString.trim().split(';');
  const pairs = arr.map(pair => pair.split(':'));
  const pairsNotEmpty = pairs.filter(pair => pair.length > 1);
  const pairsWithoutSpaces = pairsNotEmpty
    .map(pair => [pair[0].trim(), pair[1].trim()]);
  pairsWithoutSpaces.forEach(([key, value]) => (result[key] = value));

  return result;
}

module.exports = convertToObject;
