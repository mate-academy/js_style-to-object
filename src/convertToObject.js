/* eslint-disable max-len */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const array = sourceString.split(';');
  const formattedArray = array.map(row => (row
    .replace(/\n/g, '')
    .trim()
    .split(':')
  ));

  return formattedArray.reduce((formattedObject, current) => {
    if (current[0].length && current[1].length) {
      return {
        ...formattedObject,
        [current[0].trim()]: current[1]
          .trim()
          .replace(/ +(?= )/g, ''),
      };
    }

    return {
      ...formattedObject,
    };
  },
  {});
}

module.exports = convertToObject;
