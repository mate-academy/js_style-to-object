/* eslint-disable max-len */
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
  const styleObj = {};
  const styleArr = sourceString.split(';')
    .map(el =>
      el.split(':')
        .toString()
        .trim()
        .split(','));

  function toObj(style) {
    if (style[0]) {
      const objValue = style[1] !== undefined
        ? style[1].toString().trim()
        : '';

      styleObj[style[0].toString().trim()] = objValue;
    }
  }

  styleArr.forEach(toObj);

  return styleObj;
}

module.exports = convertToObject;
