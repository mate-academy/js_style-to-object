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
  const stylesCss = {};
  const normalizedString = sourceString
    .split(';')
    .map(string => string.trim())
    .filter(string => string.length > 0);

  normalizedString.forEach(string => {
    stylesCss[string.split(':')[0].trim()] = string.split(':')[1].trim();
  });

  return stylesCss;
}

module.exports = convertToObject;
