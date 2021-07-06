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
  const convertedToObject = {};
  const splitString = sourceString.split(';');
  const filteredSplitString = splitString
    .filter(property => property.includes(':'))
    .map(property => property.trim()).map(property => property.split(':'))
    .map(property => [property[0].trim(), property[1].trim()]);

  filteredSplitString.map(property => {
    const properties = property[0];

    convertedToObject[properties] = property[1];

    return convertedToObject;
  });

  return convertedToObject;
}

module.exports = convertToObject;
