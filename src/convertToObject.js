'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((prev, singleStyle) => {
    if (!singleStyle.trim()) {
      return prev;
    }

    const [property, value] = singleStyle.split(':');

    if (property && value) {
      prev[property.trim()] = value.trim();
    }

    return prev;
  }, {});
}

module.exports = convertToObject;
