'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((item) => {
    if (!item.trim()) {
      return;
    }

    {
      const [key, value] = item.split(':');
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      result[trimmedKey] = trimmedValue;
    }
  });

  return result;
}

module.exports = convertToObject;
