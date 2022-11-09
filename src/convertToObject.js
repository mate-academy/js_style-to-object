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
  const resultObj = {};

  sourceString
    .split(';')
    .filter(elements => Boolean(elements.trim()))
    .map((classes) => classes
      .split(':')
      .map(value => value.trim())
    )
    .forEach(style => {
      resultObj[style[0]] = style[1];
    });

  return resultObj;
}

module.exports = convertToObject;
