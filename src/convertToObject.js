'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayCssProperties = sourceString.split(';');
  const result = {};
  arrayCssProperties.forEach(item => {
    const [key, value] = item.split(':');
    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  }
  );
  return result;
}

module.exports = convertToObject;
