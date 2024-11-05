'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((style, declaration) => {
    const [key, value] = declaration.split(':').map((item) => item.trim());

    if (key && value) {
      style[key] = value;
    }

    return style;
  }, {});
}

module.exports = convertToObject;
