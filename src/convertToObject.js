'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((prev, item) => {
    const [key, value] = item.split(':').map((text) => text.trim());

    prev[key] = value;

    return prev;
  }, {});
}

module.exports = convertToObject;
