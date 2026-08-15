'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};
  const arrOfProperties = sourceString.split(';').filter((property) => {
    return property.trim().length !== 0;
  });

  for (const property of arrOfProperties) {
    const arr = property.split(':');
    const key = arr[0].trim();
    const value = arr[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
