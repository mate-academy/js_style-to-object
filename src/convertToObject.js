'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString.split(';').reduce((stylesObject, style) => {
    const separatorIndex = style.indexOf(':');

    if (separatorIndex === -1) {
      return stylesObject;
    }

    const property = style.slice(0, separatorIndex).trim();
    const value = style.slice(separatorIndex + 1).trim();

    if (property && value) {
      stylesObject[property] = value;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
