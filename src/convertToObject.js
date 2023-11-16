'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const stylesObject = {};

  stylesArray.forEach(style => {
    const [property, value] = style.split(':');

    if (property && value) {
      stylesObject[property.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
