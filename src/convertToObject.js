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

  styleArr.forEach(style => {
    if (style[0]) {
      styleObj[style[0].toString().trim()]
      = style[1] !== undefined
          ? style[1].toString().trim()
          : '';
    }
  });

  return styleObj;
}

module.exports = convertToObject;
