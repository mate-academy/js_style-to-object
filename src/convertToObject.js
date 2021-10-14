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
  const cssProperties = sourceString.split(';');
  const cssObject = {};

  for (const propery of cssProperties) {
    const [key, value] = [...propery.split(':').map(word => word.trim())];

    if (!key.length) {
      continue;
    }

    cssObject[key] = value;
  }

  return cssObject;
}

const stylesString = require('./stylesString');

convertToObject(stylesString);
module.exports = convertToObject;
