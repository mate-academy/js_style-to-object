'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  const result = {};

  for (const style of newArr) {
    const resultStyle = style.split(':').map(item => item.trim());

    result[resultStyle[0]] = resultStyle[1];
  }

  return result;
}

module.exports = convertToObject;
