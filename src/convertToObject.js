'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedToArray = sourceString.split(';');

  const convertedToArrayWithProperties = convertedToArray
    .map(string => string.split(':'));

  const propertiesWithoutEmptySpaces = convertedToArrayWithProperties
    .map(array => array.map(property => property.trim()));

  const filteredProperties = propertiesWithoutEmptySpaces
    .filter(array => array.every(property => property.length !== 0));

  return Object.fromEntries(filteredProperties);
}

module.exports = convertToObject;
