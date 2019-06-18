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
  const str = sourceString.replace(/;/g, ':').replace(/\n/g, '').split(':');
  const obj = {};
  for (let i = 0; i < str.length - 1; i += 2) {
    obj[str[i].trim()] = str[i + 1].trim();
  }
  return obj;
}

module.exports = convertToObject;
