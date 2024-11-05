'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((style, declaration) => {
    const [key, value] = declaration.trim().split(':');

    if (key && value) {
      style[key.trim()] = value.trim();
    }

    return style;
  }, {});
}

module.exports = convertToObject;
