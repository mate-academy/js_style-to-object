'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.trim().length === 0) {
    return {};
  }

  const result = {};
  const pairs = sourceString.split(';');

  pairs.forEach((pair) => {
    const [key, value] = pair.split(':').map((item) => item.trim());

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
