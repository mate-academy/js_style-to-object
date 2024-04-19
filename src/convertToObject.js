'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesArray = sourceString
    .split(';')
    .map((property) => property.trim())
    .filter((property) => Boolean(property));

  const propertiesObject = {};

  for (const property of propertiesArray) {
    const propertyAndValueArray = property
      .split(':')
      .map((item) => item.trim());

    propertiesObject[propertyAndValueArray[0]] = propertyAndValueArray[1];
  }

  return propertiesObject;
}

module.exports = convertToObject;
