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
  const obj = {};
  sourceString.replace(/\n/g, '')
    .replace(/\s+/g, ' ')
    .split(';')
    .map(item => item.trim()
      .replace(/ :/, ':'))
    .filter(item => item !== '')
    .map(item => item.split(':'))
    .forEach(function(item) {
      obj[`${item[0]}`] = `${item[1].trim()}`;
    });

  return obj;
}

module.exports = convertToObject;
