'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const splittedString = sourceString.split(';');

  splittedString.forEach(properties => {
    const property = properties.split(':');

    if (property.length > 1) {
      const key = property[0].trim();
      const value = property[1].trim();

      cssObject[key] = value;
    }
  });

  return cssObject;
}

module.exports = convertToObject;
