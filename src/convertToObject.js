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
  let separateElements = sourceString.split(';');

  separateElements = separateElements.map(elem =>
    (elem.split(':').map(x => x.trim())));

  const result = {};

  separateElements.map(([cssKey, cssValue]) => {
    if (cssKey && cssValue) {
      result[cssKey] = cssValue;
    }
  });

  return result;
}

module.exports = convertToObject;
