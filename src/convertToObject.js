'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesList = {};
  const sourceProperties = sourceString
    .split(';')
    .map((property) => property.split(':'))
    .filter((keyAndValue) => keyAndValue.length > 1);

  sourceProperties.forEach((property) => {
    const propertyKey = property[0].trim();
    const propertyValue = property[1].trim();

    propertiesList[propertyKey] = propertyValue;
  });

  return propertiesList;
}

module.exports = convertToObject;
