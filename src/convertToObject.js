'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObj = {};
  const sourceArray = sourceString.split(';');
  sourceArray.forEach((item) => {
    const [key, value] = item.split(':');
    if (value !== undefined) {
      sourceObj[key.trim()] = value.trim();
    }
  });
  return sourceObj;
}

module.exports = convertToObject;
