/* eslint-disable no-console */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringArray = sourceString.split(';');

  const result = sourceStringArray.reduce((acc, item) => {
    if (item.trim() !== '') {
      const itemArray = item.split(':');
      const key = itemArray[0].trim();
      const value = itemArray[1].trim();

      acc[key] = value;
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
