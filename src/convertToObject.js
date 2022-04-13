'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};
  const styleArr = sourceString.split(';');

  styleArr.forEach(style => {
    const properties = style.split(':').map(property => property.trim(' '));

    if (properties[1]) {
      styleObj[properties[0]] = properties[1];
    }
  });

  return styleObj;
}

module.exports = convertToObject;
