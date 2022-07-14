'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString
    .split(';')
    .map(style => style.split(':'));

  const formattedString = splittedString
    .map(([style, value]) => style && value
      ? `${style.trim()}:${value.trim()}`
      : '')
    .filter(style => style !== '')
    .map(style => style.split(':'));

  return Object.fromEntries(formattedString);
}

module.exports = convertToObject;
