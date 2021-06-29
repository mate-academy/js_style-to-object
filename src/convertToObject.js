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
  const allProperties = sourceString
    .split(';')
    .map(property => property.trim().split(':'))
    .filter(property => property.length !== 1);

  allProperties.forEach(el => {
    el[0] = el[0].trim();
    el[1] = el[1].trim();
  });

  return Object.fromEntries(allProperties);
}

module.exports = convertToObject;
