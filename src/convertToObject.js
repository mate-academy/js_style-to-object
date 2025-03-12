'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  return styleString.split(';').reduce((styleObject, style) => {
    const [key, value] = style.split(':').map((part) => part.trim());

    if (key && value) {
      styleObject[key] = value;
    }

    return styleObject;
  }, {});
}

module.exports = convertToObject;
