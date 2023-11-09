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
  const listArray = sourceString.split(';');

  const objArray = listArray.reduce((acc, item) => {
    const trimedItem = item.trim();

    if (!trimedItem) {
      return acc;
    }

    const [key, value] = trimedItem.split(':');

    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return objArray;
}

module.exports = convertToObject;
