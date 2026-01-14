'use strict';

/**
 * @param {string} styleString
 * @returns {Object}
 */
function convertToObject(styleString) {
  return styleString.split(';').reduce((acc, curr) => {
    const [key, value] = curr.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
