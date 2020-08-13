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
  const stylesObject = {};

  sourceString
    .split(';')
    .forEach(stylesString => {
      const property = stylesString.split(':')[0];
      const value = stylesString.split(':')[1];

      if (property && value) {
        stylesObject[property.trim()] = value.trim();
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
