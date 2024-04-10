'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((result, style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    result[key] = value;

    return result;
  }, {});
}

module.exports = convertToObject;
