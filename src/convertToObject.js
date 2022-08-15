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
  const splitProperties = sourceString.split(';');
  const filterEmpty = splitProperties.filter(style => style.trim());
  const entries = filterEmpty.map(style => style.split(':'));
  const trimmedEntries = entries.map(style => style.map(value => value.trim()));

  const resultObj = Object.fromEntries(trimmedEntries);

  return resultObj;
}

module.exports = convertToObject;
