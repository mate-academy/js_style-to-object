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
  const properties = sourceString.trim().split(';').filter(item =>
    item.trim() !== '').map(item =>
    item.trim().split(':'));
  const obj = {};
  for (let i = 0; i < properties.length; i++) {
    obj[properties[i][0].trim()] = properties[i][1].trim();
  }

  return obj;
}
module.exports = convertToObject;
