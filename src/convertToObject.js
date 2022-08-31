'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const result = arr.filter(style => style.trim().length);
  const newobj = result.reduce((prev, style) => ({
    ...prev,
    [style.slice(0, style.indexOf(':')).trim()]:
     style.slice(style.indexOf(':') + 1).trim(),
  }), {});

  return newobj;
}

module.exports = convertToObject;
