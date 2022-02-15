'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.split(';').map(elem =>
    elem.split(':')).filter(elem => elem.length > 1);

  const outputStyles = {};

  stylesList.forEach(([key, value]) => {
    Object.assign(outputStyles, {
      [key.trim()]: value.trim(),
    });
  });

  return outputStyles;
}

module.exports = convertToObject;
