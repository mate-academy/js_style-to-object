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
  const updatedSource = sourceString
    .split(';')
    .filter(property => property.includes(':'))
    .map(property => property.split(':'));

  const styles = updatedSource.reduce((acc, [key, value]) => ({
    ...acc,
    [key.trim()]: value.trim(),
  }), {});

  return styles;
}

module.exports = convertToObject;
