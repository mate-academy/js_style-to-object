'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const sourceArray = sourceString.split('\n');
  const cssProperties = {};

  sourceArray.forEach(item => {
    cssProperties[item.slice(0, item.indexOf(':')).trim()]
      = item.slice(item.indexOf(':') + 1, item.indexOf(';')).trim();
  });

  delete cssProperties[''];

  return cssProperties;
}

module.exports = convertToObject;
