'use strict';

/**
 * Implement convertToObject function:
 *
 // eslint-disable-next-line max-len
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 // eslint-disable-next-line max-len
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.split(';');

  return styleArray.reduce((result, style) => {
    if (style) {
      const [property, value] = style.split(':').map(part => part.trim());

      if (property && value) {
        result[property] = value;
      }
    }

    return result;
  }, {});
}

module.exports = convertToObject;
