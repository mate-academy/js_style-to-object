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
  sourceString
    .split('\n')
    .map(rule => rule.trim()
      .replace(/[\t;]/g, ''))
    .filter(rule => rule)
    .reduce((obj, rule) => {
      const [key, val] = rule.split(':');

      return {
        ...obj, [key.trim()]: val.trim(),
      };
    }, {});

module.exports = convertToObject;
