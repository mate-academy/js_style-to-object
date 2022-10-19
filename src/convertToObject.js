'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayItemsFromString = sourceString.split(';');

  const resultObject = arrayItemsFromString.reduce((accumulator, item) => {
    if (!item) {
      return accumulator;
    }

    const stringItem = item.replace('\n', '').trim();

    if (!stringItem) {
      return accumulator;
    }

    const itemArray = stringItem.split(':');

    return {
      ...accumulator,
      [itemArray[0].trim()]: itemArray[1].trim(),
    };
  }, {});

  return resultObject;
}

module.exports = convertToObject;
