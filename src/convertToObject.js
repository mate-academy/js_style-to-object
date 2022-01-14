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
  const arr = sourceString.split(';');
  const withoutSpaces = arr.map(el => el.trim());
  const filtered = withoutSpaces.filter(el => el);
  const obj = {};

  filtered.forEach(el => {
    obj[(el.slice(0, el.indexOf(':'))).trim()]
    = el.slice(el.indexOf(':') + 1).trim();
  });

  return obj;
}

module.exports = convertToObject;
