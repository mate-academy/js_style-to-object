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
  const styleOdject = sourceString
    .split(';')
    .map(items => items.split(':')
      .map(item => item.trim()))
    .filter(item => item.length > 1);

  return Object.fromEntries(styleOdject);
}

module.exports = convertToObject;
