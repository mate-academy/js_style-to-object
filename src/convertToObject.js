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
  let array = sourceString.split(';');

  const result = {};

  array = array.map(item => (item.replace('"').trim()));

  while (array.indexOf('') !== -1) {
    array.splice(array.indexOf(''), 1);
  }

  array.map(item =>
    (result[item.split(':')[0].trim()] = item.split(':')[1].trim()));

  return result;
}

module.exports = convertToObject;
