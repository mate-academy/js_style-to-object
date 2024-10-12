'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};
  const styleStr = sourceString.split(';');

  styleStr.forEach((str) => {
    const [key, value] = str.split(':');

    if (key && value) {
      const cleanKey = key.trim();
      const cleanValue = value.trim();

      result[cleanKey] = cleanValue;
    }
  });

  return result;
}

module.exports = convertToObject;
