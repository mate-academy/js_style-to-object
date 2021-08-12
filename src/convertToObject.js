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
    .map(elements => elements.split(':')
      .map(item => item.trim()))
    .filter(elements => elements.length > 1);

  return Object.fromEntries(styleOdject);
}

module.exports = convertToObject;
