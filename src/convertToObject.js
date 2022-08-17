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
  const formattedArray = array
    .map(el => el.replace(/\n/g, '').trim().split(':'));

  const object = formattedArray.reduce((prev, current) => {
    if (current[0].length !== 0 && current[1].length !== 0) {
      return {
        ...prev,
        [current[0].trim()]: current[1].trim().replace(/ +(?= )/g, ''),
      };
    }

    return {
      ...prev,
    };
  }, {});

  return object;
}

module.exports = convertToObject;
