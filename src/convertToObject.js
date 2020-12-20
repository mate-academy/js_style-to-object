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
  const sourceArray = sourceString
    .split('\n')
    .join('')
    .split(';')
    .map(param => param.split(':')
      .map(part => part
        .split(' ')
        .filter(x => x.length > 0)
        .join(' ')))
    .filter(param => param.length === 2);
  const result = {};

  for (const param of sourceArray) {
    result[param[0]] = param[1];
  }

  return result;
}

module.exports = convertToObject;
