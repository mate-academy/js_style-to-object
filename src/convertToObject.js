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
    .map(element => element.trim())
    .filter(element => element.length);
  const object = stylesArray.reduce((prev, elem) => {
    return {
      ...prev,
      [elem.slice(0, elem.indexOf(':')).trim()]:
        elem.slice(elem.indexOf(':') + 1).trim(),
    };
  }, {});

  return object;
}

module.exports = convertToObject;
