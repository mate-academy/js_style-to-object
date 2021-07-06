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
  return sourceString
    .split(';')
    .map(couple => couple.split(':')
      .map(item => item.trim()))
    .filter(value => value.length === 2)
    .reduce((key, value) => {
      key[value[0]] = value[1];

      return key;
    }, {});
}

module.exports = convertToObject;
