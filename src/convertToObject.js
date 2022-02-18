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
  const clearedStyles = sourceString.split(';').reduce((accum, style) => {
    const [key, value] = style.split(':').map(item => item.trim());

    if (key && value) {
      accum[key] = value;
    }

    return accum;
  }, {});

  return clearedStyles;
}

module.exports = convertToObject;
