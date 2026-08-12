'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((accum, item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      accum[key.trim()] = value.trim();
    }

    return accum;
  }, {});
}

module.exports = convertToObject;
