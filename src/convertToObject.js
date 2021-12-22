'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const simpleString = sourceString.replace(/\s+/g, ' ')
    .trim()
    .replace(/ :/g, ':');

  const result = {};

  simpleString.split(';')
    .map(elem => elem.trim())
    .filter(string => string.length > 0)
    .map(property => property.split(': '))
    .forEach(part => (result[part[0]] = part[1]));

  return result;
}

module.exports = convertToObject;
