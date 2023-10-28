'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssObjs = {};

  const splitPropKeys = sourceString
    .replace((/ {2}|\r\n|\n|\r/gm), '')
    .replace(' :', ':')
    .replace('  ', '')
    .trim()
    .split(';')
    .filter(property => property !== '');

  splitPropKeys.forEach((item, index) => {
    cssObjs[`${item.split(':')[0].trim()}`] = item.split(':')[1].trim();
  });

  return cssObjs;
}

module.exports = convertToObject;
