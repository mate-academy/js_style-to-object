'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedData = sourceString
    .split(';')
    .map((itemFromArr) => itemFromArr.trim())
    .filter((itemFromArr) => itemFromArr.length > 0)
    .map((itemFromArr) => {
      const separatorIndex = itemFromArr.indexOf(':');
      const newKey = itemFromArr.slice(0, separatorIndex).trim();
      const newValue = itemFromArr.slice(separatorIndex + 1).trim();

      return [newKey, newValue];
    })
    .reduce((accumulator, [key, value]) => {
      accumulator[key] = value;

      return accumulator;
    }, {});

  return convertedData;
}

module.exports = convertToObject;
