'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';').reduce((stylesObject, style) => {
    const [property, value] = style.split(':').map((part) => part.trim());

    if (property && value) {
      stylesObject[property] = value;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
