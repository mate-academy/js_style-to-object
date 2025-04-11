'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const normalizedStyles = stylesArray
    .map((styleLine) => styleLine.trim())
    .filter((styleLine) => styleLine.includes(':'))
    .map((styleLine) => {
      const [propertyName, propertyValue] = styleLine
        .split(':')
        .map((part) => part.trim());

      return {
        [propertyName]: propertyValue,
      };
    })
    .reduce((accumulator, currentValue) => {
      return { ...accumulator, ...currentValue };
    }, {});

  return normalizedStyles;
}

module.exports = convertToObject;
