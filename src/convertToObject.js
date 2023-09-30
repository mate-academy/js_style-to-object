'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayStyles = sourceString.split(';')
    .map(element => element.trim());

  return getObject(arrayStyles);
}

function getObject(array) {
  const objStyle = {};

  array.forEach(element => {
    const colon = element.indexOf(':');
    const key = element.slice(0, colon).trim();
    const param = element.slice(colon + 1).trim();

    if (colon > 0) {
      objStyle[key] = param;
    }
  });

  return objStyle;
}

module.exports = convertToObject;
