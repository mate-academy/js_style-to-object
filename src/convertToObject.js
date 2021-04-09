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
  const string = sourceString.split(';');

  const newString = string.map(param => {
    const newParam = param.split(':');

    const writeParam = newParam.map(item => item.trim());

    return writeParam;
  });

  const paramForObject = newString.filter(item => item.length > 1);

  const result = {};

  for (const params of paramForObject) {
    result[params[0]] = params[1];
  }

  return result;
}

module.exports = convertToObject;
