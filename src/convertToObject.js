'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styles, styleString) => {
    const PARTS = styleString.split(':');

    if (PARTS.length < 2) {
      return styles;
    }

    const KEY = PARTS[0].trim();
    const VALUE = PARTS[1].trim();

    styles[KEY] = VALUE;

    return styles;
  }, {});
}

module.exports = convertToObject;
