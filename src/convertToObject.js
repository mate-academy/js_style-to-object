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
  const cssProperties = sourceString
    .split(';')
    .map(prop => prop.trim()
      .split(':')
      .map(elem => elem.trim()))
    .filter(prop => prop.length > 1);

  return cssProperties.reduce((acc, prop) => {
    return {
      ...acc,
      [prop[0]]: prop[1],
    };
  }, {});
}

module.exports = convertToObject;
