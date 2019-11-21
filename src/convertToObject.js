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
    .split(';')
    .filter(line => /\S/.test(line))
    .map(line => line.split(':')
      .map(propAndValue => propAndValue.trim()));

  return Object.fromEntries(sourceArray);
}

module.exports = convertToObject;
