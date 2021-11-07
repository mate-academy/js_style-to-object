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
  const arr = sourceString.split(';')
    .filter(x => x.trim().length > 0)
    .map(x => x.trim());

  const result = {};

  for (const i of arr) {
    result[i.split(':')[0].trim()] = i.split(':')[1].trim();
  }

  return result;
}

module.exports = convertToObject;
