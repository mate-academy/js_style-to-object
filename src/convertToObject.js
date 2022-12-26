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
  const stylesArray = sourceString.split(';')
    .map(e => e.trim())
    .filter(e => e.length !== 0);
  const object = stylesArray.reduce((prev, e) => {
    return {
      ...prev,
      [(e.slice(0, e.indexOf(':'))).trim()]:
        (e.slice((e.indexOf(':') + 1)).trim()),
    };
  }, {});

  return object;
}

module.exports = convertToObject;
