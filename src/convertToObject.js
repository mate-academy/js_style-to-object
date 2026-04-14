'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const finalString = {};
  const pairs = sourceString.split(';');

  pairs.forEach((pair) => {
    const cleanPair = pair.trim();

    if (cleanPair.length > 0) {
      const [key, value] = cleanPair.split(':');

      finalString[key.trim()] = value.trim();
    }
  });

  return finalString;
}

module.exports = convertToObject;
