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
  const params = sourceString.split(';')
    .filter(param => param.length > 4);

  const itemParam = params
    .map(item => item.split(':')
      .map(x => x.trim()));

  const result = Object.fromEntries(itemParam);

  return result;
}

module.exports = convertToObject;
