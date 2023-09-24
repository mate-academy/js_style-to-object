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
  const propertiesArray = sourceString.split(';');
  const cssObject = {};

  propertiesArray.filter((item) => item.includes(':')).forEach((item) => {
    const property = item.split(':');

    const key = property[0].trim();
    const value = property[1].trim();

    cssObject[key] = value;
  }
  );

  return cssObject;
}

module.exports = convertToObject;
