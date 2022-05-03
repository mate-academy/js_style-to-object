'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
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

  const resultObject = Object.fromEntries(trimmedEntries);

  return resultObject;
}

module.exports = convertToObject;
