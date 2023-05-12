'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const valueStyles = sourceString.split(';')
    .map(style => style.split(':')
      .map(data => data.trim()))
    .filter(style => style.length > 1);

  return valueStyles.reduce((total, style) => {
    return {
      ...total,
      [style[0]]: style[1],
    };
  }, {});
}

module.exports = convertToObject;
