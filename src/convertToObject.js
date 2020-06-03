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
  const pattern = /(^\s+)|(\s+(?=:))|(\s+$)/g;

  const object = Object.fromEntries(sourceString
    .replace(/\s+/g, ' ')
    .split(';')
    .map(element => element.replace(pattern, '').split(': '))
    .filter(element => element.length > 1));

  return object;
}

module.exports = convertToObject;
