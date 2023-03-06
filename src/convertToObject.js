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
  const arr = sourceString.split('\n').filter(line => line.length > 5);
  let style;

  const callback = (prev, line) => {
    style = line.split(':');

    return {
      ...prev,
      [style[0].trim()]: style[1].slice(0, -1).trim(),
    };
  };

  return arr.reduce(callback, {});
}

module.exports = convertToObject;
