'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const convertedOblect = sourceString
    .split(';')
    .filter((obj) => obj.length > 0)
    .reduce((acc, obj) => {
      const [key, value] = obj.split(':').map((part) => part.trim());

      acc[key] = value;

      return acc;
    }, {});

  return convertedOblect;
}

module.exports = convertToObject;
