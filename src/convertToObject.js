'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePairs = sourceString.split(';');
  const stylesObject = {};

  stylePairs.forEach((element) => {
    const trimmedPair = element.trim();

    if (trimmedPair) {
      const [key, value] = trimmedPair.split(':');
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      stylesObject[trimmedKey] = trimmedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
