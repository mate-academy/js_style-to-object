'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const words = sourceString.split(';');
  const cssCode = {};

  words.forEach(word => {
    const property = word.split(':');

    if (property.length === 2) {
      cssCode[property[0].trim()] = property[1].trim();
    }
  });

  return cssCode;
}

module.exports = convertToObject;
