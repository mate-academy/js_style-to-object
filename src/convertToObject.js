'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const stylesObject = {};

  for (const style of stylesArray) {
    let [property, value] = style.split(':');

    if (property && value) {
      property = property.trim();
      value = value.trim();

      stylesObject[property] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
