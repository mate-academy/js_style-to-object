'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const res = {};
  const inputSplittedString = sourceString.split(';');

  for (const item of inputSplittedString) {
    const splittedItem = item.split(':');

    if (splittedItem.length === 2) {
      const [key, value] = splittedItem;

      res[key.trim()] = value.trim();
    }
  }

  return res;
}

module.exports = convertToObject;
