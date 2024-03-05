'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const indvStyles = sourceString.split(';');

  for (const eachStyle of indvStyles) {
    const [key, value] = eachStyle.split(':').map((part) => part.trim());

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
