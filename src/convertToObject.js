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
  const properties = sourceString
    .replace(/ +/g, ' ').split('\n').join('')
    .split(':').join('":"').split(';').join('","')
    .split('" ').join('"').split(' "').join('"')
    .split('"",').join('');

  return JSON.parse('{"' + properties.slice(1, properties.length - 3) + '"}');
}

module.exports = convertToObject;
