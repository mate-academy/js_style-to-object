'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString
    .split(';')
    .map((property) => property.split(':'))
    .map((propertyPair) => propertyPair.map((value) => value.trim()))
    .filter((propertyPair) => propertyPair.length > 1);

  const styleObject = styleArray.reduce((acc, [property, styleValue]) => {
    return {
      ...acc,
      [property]: styleValue,
    };
  }, {});

  return styleObject;
}

module.exports = convertToObject;
