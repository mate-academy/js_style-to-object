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
  return Object.fromEntries(sourceString.split(';')
    .map(rule => rule.trim())
    .filter(Boolean)
    .map(rule => rule.split(':', 2))
    .map(parts => [parts[0].trim(), parts[1].trim()])
  );
}

module.exports = convertToObject;
