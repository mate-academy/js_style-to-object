'use strict';
/* eslint-disable */
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
/* eslint-enable */

function convertToObject(sourceString) {
  const cssProperties = sourceString
    .split(';')
    .map(property => property.replace(/['\n']/g, '').replace(/ /g, ' ').trim())
    .filter(property => property !== '');

  return cssProperties.reduce((prev, item) => {
    const key = item.slice(0, item.indexOf(':')).trim();
    const value = item.slice(item.indexOf(':') + 1).trim();

    return {
      ...prev,
      [key]: value,
    };
  }, {});
}

module.exports = convertToObject;
