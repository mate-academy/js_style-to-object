'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, style) => {
    const cleanedStyle = style.trim().replace(/;$/, '');
    const [property, value] = cleanedStyle
      .split(':')
      .map((item) => item.trim());

    if (property && value) {
      stylesObject[property] = value;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
