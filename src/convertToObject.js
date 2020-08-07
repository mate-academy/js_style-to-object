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
  return JSON.parse('{"' + sourceString
    .replace(/ +/g, ' ').split('\n').join('')
    .split(': ').join('":"')
    .split(';').join('","')
    .split(' "').join('"')
    .split('" ').join('"')
    .split('"",').join('')
    .trim().slice(0, -3) + '"}');
}

module.exports = convertToObject;
