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
  const sort = sourceString.replace(/(\r\n|\n|\r)/gm, '').split(';')
    .filter(x => x !== '  ')
    .filter(x => x !== '');

  const result = {};

  for (let i = 0; i < sort.length; i++) {
    result[sort[i].split(':')[0].trim()] = sort[i].split(':')[1].trim();
  }

  return result;
}

module.exports = convertToObject;
