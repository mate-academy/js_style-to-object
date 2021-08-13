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
  const clearedStyles = sourceString.split(';')
    .map(style => style.split(':')
      .map(property => property.trim()))
    .filter(style => style.length === 2);

  return Object.fromEntries(clearedStyles);
}

module.exports = convertToObject;
