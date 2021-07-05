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
  const t = sourceString.split(';');

  t.forEach(element => element.split(':'));

  const y = t.map(element => {
    return element.trim().split(':');
  });

  const u = {};

  for (const char of y) {
    if (char[1] !== undefined) {
      u[`${char[0].trim()}`] = char[1].trim();
    }
  }

  return u;
}

module.exports = convertToObject;
