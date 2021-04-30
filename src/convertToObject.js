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
  const properties = {};
  const splited = sourceString
    .split(':')
    .join(';')
    .split(';')
    .map(word => word.trim())
    .filter(word => word !== '');

  for (let i = 0; i < splited.length; i += 2) {
    properties[splited[i]] = splited[i + 1];
  }

  return properties;
}

module.exports = convertToObject;
