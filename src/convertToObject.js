'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.trim().replace(/\s+/g, ' ').split(';');
  const stylesObject = {};

  stylesArray.forEach((style) => {
    const separatorIndex = style.indexOf(':');
    const property = style.substring(0, separatorIndex).trim();
    const value = style.substring(separatorIndex + 1).trim();

    if (property) {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
