'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const sourceArr = sourceString.split(';');

  for (let sourceItem of sourceArr) {
    sourceItem = sourceItem.trim();

    if (sourceItem.length > 0) {
      const splitedItem = sourceItem.split(':');

      splitedItem[0] = splitedItem[0].trim();
      splitedItem[1] = splitedItem[1].trim();

      result[splitedItem[0]] = splitedItem[1];
    }
  }

  return result;
}

module.exports = convertToObject;
