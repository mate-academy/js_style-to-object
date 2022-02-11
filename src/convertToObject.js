'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
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
