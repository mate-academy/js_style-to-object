'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');

  const filteredSourceArrays = sourceArray
    .map((arr) => arr.split(':'))
    .filter((arr) => arr.length > 1);

  const convertedToObject = filteredSourceArrays.reduce(
    (sourceObject, array) => {
      const [property, value] = array;

      sourceObject[property.trim()] = value.trim();

      return sourceObject;
    },
    {},
  );

  return convertedToObject;
}

module.exports = convertToObject;
