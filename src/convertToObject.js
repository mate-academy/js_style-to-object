'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringToArray = sourceString.split(';');
  const arrayWithinArray = stringToArray.map(v => v.split(':'));
  const result = {};

  for (const array of arrayWithinArray) {
    const rawKey = array[0].split('\n');
    const filteredKey = rawKey.filter(v => v.length > 0);
    const finaleKey = filteredKey.join(' ').trim();

    if (array[1] !== undefined && finaleKey.length > 0) {
      result[finaleKey] = array[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
