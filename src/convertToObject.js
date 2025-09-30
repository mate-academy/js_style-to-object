'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const declarationStrings = sourceString.split(';');

  declarationStrings.forEach((pair) => {
    const [rawKey, rawValue] = pair.split(':');
    const key = rawKey?.trim();
    const value = rawValue?.trim();

    if (key && value) {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
