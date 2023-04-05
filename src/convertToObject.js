'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter(prop => prop.trim() !== '')
    .map(prop => prop.trim().split(':'))
    .reduce((acc, [prop, value]) => ({
      ...acc,
      [prop.trim()]: value.trim(),
    }), {});

  return styles;
};

module.exports = convertToObject;
