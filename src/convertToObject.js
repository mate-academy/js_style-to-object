'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedInObject = {};

  sourceString.split(';').forEach((item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      convertedInObject[key.trim()] = value.trim();
    }
  });

  return convertedInObject;
}

module.exports = convertToObject;
