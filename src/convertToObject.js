'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const styleDeclarations = sourceString.split(';');

  const stylePairs = styleDeclarations
    .filter((element) => element.includes(':'))
    .map((element) => {
      const propertyAndValue = element.split(':');
      const key = propertyAndValue[0].trim();
      const value = propertyAndValue[1].trim();

      return [key, value];
    });

  return stylePairs.reduce((stylesObject, currentPair) => {
    const [key, value] = currentPair;

    stylesObject[key] = value;

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
