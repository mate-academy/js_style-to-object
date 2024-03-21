'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const attributes = sourceString.split(';').filter((attr) => attr.length > 1);

  for (const element in attributes) {
    const attribute = attributes[element].split(':');

    const key = attribute[0];
    const value = attribute[1];

    if (key !== undefined && value !== undefined) {
      const keyForObj = key.trim();
      const valueForObj = value.trim();

      result[keyForObj] = valueForObj;
    }
  }

  return result;
}

module.exports = convertToObject;
