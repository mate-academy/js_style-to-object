'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 // eslint-disable-next-line max-len
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(propPair => propPair.trim())
    .reduce((styleObject, property) => {
      const [key, value] = property.split(':');

      if (key && value) {
        styleObject[key.trim()] = value.trim();

        return styleObject;
      }
    }, {});
}

module.exports = convertToObject;
