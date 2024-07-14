'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObj = sourceString
    .split(';')
    .map((itemFromArr) => itemFromArr.trim())
    .filter((itemFromArr) => itemFromArr.length > 0)
    .map((itemFromArr) => {
      const separatorIndex = itemFromArr.indexOf(':');
      const newKey = itemFromArr.slice(0, separatorIndex).trim();
      const newValue = itemFromArr.slice(separatorIndex + 1).trim();

      return [newKey, newValue];
    })
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});

  return resultObj;
}

module.exports = convertToObject;
