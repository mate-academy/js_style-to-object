'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, item) => {
    const current = item.split(':');
    const key = current[0] && current[0].trim();
    const value = current[1] && current[1].trim();

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
