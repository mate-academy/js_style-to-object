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
  const list = sourceString.split(';').map(
    style => style.trim()).filter(
    style => style.length > 0).map(
    style => style.split(':')
  );
  const object = list.reduce((prev, style) => ({
    ...prev,
    [style[0].trim()]: style[1].trim(),
  }), {});

  return object;
}

module.exports = convertToObject;
