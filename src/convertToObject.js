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

  return cssProperties.reduce((object, property) => {
    const [key, value] = property.split(':');

    if (!key.length || !value) {
      return object;
    }

    object[key.trim()] = value.trim();

    return object;
  }, {});
}

const stylesString = require('./stylesString');

convertToObject(stylesString);
module.exports = convertToObject;
