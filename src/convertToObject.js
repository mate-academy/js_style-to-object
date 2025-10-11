'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObj = {};

  sourceString.split(';').forEach((style) => {
    let property;
    let value;

    [property, value] = style.split(':');

    if (property && value) {
      property = property.trim();
      value = value.trim();
      stylesObj[property] = value;
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
