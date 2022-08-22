'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {

  const sourceClean = sourceString
    .split(';')
    .filter(style => style.trim().length !== 0)
    .map(style => style.replace(/\s\s+/g, ' '))
    .map(style => style.split(':').map(str => str.trim()));

  const sourceObject = Object.fromEntries(sourceClean);

  return sourceObject;
}

module.exports = convertToObject;
