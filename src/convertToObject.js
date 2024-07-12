'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePropertiesSplittedByDotComa = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const stylePropertiesSplittedByDoubleDot = stylePropertiesSplittedByDotComa
    .map((item) => item.split(':'))
    .map((splittedCssProperty) =>
      // eslint-disable-next-line prettier/prettier
      splittedCssProperty.map((propertyPart) => propertyPart.trim()));

  const cssPropertiesObject = stylePropertiesSplittedByDoubleDot.reduce(
    (acc, [key, value]) => {
      acc[key] = value;

      return acc;
    },
    {},
  );

  return cssPropertiesObject;
}

module.exports = convertToObject;
