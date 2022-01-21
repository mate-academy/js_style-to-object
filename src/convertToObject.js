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
  const stylesObject = {};

  sourceString.split(';').forEach(style => {
    const styleArray = style.split(':').map(word => word.trim());
    const [property, value] = styleArray;

    if (property && value) {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
