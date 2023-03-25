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
  const stylesMas = sourceString
    .split(';')
    .map(elem => elem.replace(/\n/g, '').trim())
    .filter(style => style !== '');

  const stylesObj = {};

  for (const style of stylesMas) {
    const key = style.slice(0, style.indexOf(':')).trim();
    const value = style.slice(style.indexOf(':') + 1).trim();

    stylesObj[key] = value;
  }

  return stylesObj;
}

module.exports = convertToObject;
