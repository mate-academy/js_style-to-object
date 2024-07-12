'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedByDotComa = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const splittedByDoubleDot = splittedByDotComa
    .map((item) => item.split(':'))
    .map((SplittedCssProperty) =>
      // eslint-disable-next-line prettier/prettier
      SplittedCssProperty.map((propertyPart) => propertyPart.trim()));

  const cssProperiesObject = splittedByDoubleDot.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return cssProperiesObject;
}

module.exports = convertToObject;
