'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');

  const filteredSourceArrays = sourceArray
    .map((style) => style.split(':'))
    .filter((stylePair) => stylePair.length > 1);

  const convertedToObject = filteredSourceArrays.reduce(
    (sourceObject, stylePair) => {
      const [property, value] = stylePair;

      sourceObject[property.trim()] = value.trim();

      return sourceObject;
    },
    {},
  );

  return convertedToObject;
}

module.exports = convertToObject;
