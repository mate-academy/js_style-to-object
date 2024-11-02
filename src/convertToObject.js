'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((result, style) => {
    const [key, value] = style.split(':').map((part) => part.trim());

    if (key && value) {
      result[key] = value;
    }

    return result;
  }, {});
}

module.exports = convertToObject;
