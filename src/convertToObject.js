'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = sourceString =>
  sourceString.split(';')
    .map((style) => style
      .split(':')
      .map((value) => value.replace(/[\n\t]/g, '').trim()))
    .filter(el => el.length > 1)
    .reduce((obj, [key, val]) => ({
      ...obj, [key]: val,
    }), {});

module.exports = convertToObject;
