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
  const stringArr = sourceString
    .split(';')
    .map(string => (
      string
        .split(':')
    ));

  const callback = (css, style) => {
    return {
      ...css,
      [style[0].trim()]: style[1].trim(),
    };
  };

  return stringArr
    .filter(element => element.length > 1)
    .reduce(callback, {});
}

module.exports = convertToObject;
