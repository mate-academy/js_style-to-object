'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const arrProperties = sourceString
    .replace(/\s+/g, ' ')
    .split(';')
    .filter(e => e.trim().length > 0);

  arrProperties.map(elem => {
    const key = elem
      .slice(0, elem.indexOf(':'))
      .trim()
      .replace(/\s+/g, '');
    const value = elem
      .slice(elem.indexOf(':') + 1)
      .trim();

    cssObject[key] = value;
  });

  return cssObject;
}

module.exports = convertToObject;
