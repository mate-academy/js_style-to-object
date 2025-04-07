'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sliceString = sourceString.split(';');

  const result = {};

  sliceString.forEach((el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      result[trimmedKey] = trimmedValue;
    }
  });

  return result;
}

module.exports = convertToObject;
