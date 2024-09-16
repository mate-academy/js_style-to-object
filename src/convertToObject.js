'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const sourceArray = sourceString.split(';');

  sourceArray.forEach((value) => {
    const properties = value.split(':');

    if (properties[1]) {
      result[properties[0].trim()] = properties[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
