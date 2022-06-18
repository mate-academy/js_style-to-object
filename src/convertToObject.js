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
  const objectStyles = {};

  const arrayStyles = sourceString
    .split(';')
    .map(item => item.slice(1)
      .split(':')
      .map(style => style
        .trim()));

  arrayStyles.map(item => {
    if (item[0]) {
      objectStyles[item[0]] = item[1];
    }
  });

  return objectStyles;
}

module.exports = convertToObject;
