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
  const cssArray = sourceString.split(';').map(element => element.split(':'));

  return cssArray.reduce((previous, current) => {
    if (current.length > 1) {
      return {
        ...previous,
        [current[0].trim()]: current[1].trim(),
      };
    }

    return { ...previous };
  }, {});
}

module.exports = convertToObject;
