'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const toObject = {};

  sourceString.split(';').forEach((item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      toObject[key.trim()] = value.trim();
    }
  });

  return toObject;
}

module.exports = convertToObject;
