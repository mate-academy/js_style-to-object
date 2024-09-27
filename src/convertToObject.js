'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const sourceArray = sourceString.split(';');

  sourceArray.forEach(element => {
    const [propety, value] = element.split(':');

    if (value !== undefined) {
      result[propety.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
