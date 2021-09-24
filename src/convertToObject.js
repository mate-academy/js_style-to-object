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
  const result = {};
  const cssStyles = sourceString
    .replace(/\s+/g, ' ').split(';')
    .filter(item => item.length > 1)
    .map(item => item.trim().split(': '));

  cssStyles.forEach(item => (result[item[0].trim()] = item[1].trim()));

  return result;
}

module.exports = convertToObject;
