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
  const array = sourceString.split(';');
  const trimArray = array.map(style => style.trim());
  const filterArray = trimArray.filter(style => style.length > 0);
  const splitArray = filterArray.map(style => style.split(':'));
  const object = splitArray.reduce((prev, style) => ({
    ...prev,
    [style[0].trim()]: style[1].trim(),
  }), {});

  return object;
}

module.exports = convertToObject;
