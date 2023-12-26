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
  const strParts = sourceString.split(';');

  const cssProperties = strParts.reduce((result, element) => {
    const [property, value] = element.split(':').map(part => part.trim());

    if (property && value) {
      result[property] = value;
    }

    return result;
  }, {});

  return cssProperties;
}

module.exports = convertToObject;
