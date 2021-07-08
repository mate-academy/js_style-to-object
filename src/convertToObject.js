'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedSources = sourceString.split(';');

  return splittedSources.filter(
    convertStyle => convertStyle.includes(':'))
    .map(convertStyle => convertStyle.split(':'))
    .reduce((acaccumulator, convertStyle) => {
      const currentKey = convertStyle[0].trim();
      const currentValue = convertStyle[1].trim();

      acaccumulator[currentKey] = currentValue;

      return acaccumulator;
    }, {});
}

module.exports = convertToObject;
