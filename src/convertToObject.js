'use strict';

/**
* Implement convertToObject function:
*
* Function takes a string with styles
(see an example in [stylesString.js](./stylesString.js))
* and returns an object where CSS properties are keys
* and values are the values of related CSS
properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map(style => style.split(':')
      .map(value => value.trim()));

  const stylesObject = {};

  for (const style of stylesArray) {
    if (style[0] !== undefined && style[1] !== undefined) {
      stylesObject[style[0]] = style[1];
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
