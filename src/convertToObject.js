'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((prev, style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    if (key && value) {
      prev[key] = value;
    }

    return prev;
  }, {});
}

module.exports = convertToObject;
