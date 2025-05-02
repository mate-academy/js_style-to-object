'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, elem, index, arr) => {
    const [key, value] = elem.split(':');

    if (key !== undefined && value !== undefined) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
