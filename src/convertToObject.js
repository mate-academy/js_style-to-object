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
  const sourceArrey = sourceString.split(';');

  return sourceArrey.reduce((result, item) => {
    const splitedItem = item.split(':');

    if (splitedItem.length !== 2) {
      return result;
    }

    return {
      ...result, [splitedItem[0].trim()]: splitedItem[1].trim(),
    };
  }, {});
}

module.exports = convertToObject;
