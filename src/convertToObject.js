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
function convertToObject(sourceString) {
  const res = {};
  const splittedString = sourceString.split(';\n')
    .map(function(item) {
      return item.trim();
    })
    .filter(function(item) {
      return !!item;
    });

  splittedString.forEach(function(item) {
    const doublePos = item.indexOf(':');
    const resKey = item.slice(0, doublePos).trim();
    const resValue = item.slice(doublePos + 1).trim();

    res[resKey] = resValue;
  });

  return res;
}

module.exports = convertToObject;
