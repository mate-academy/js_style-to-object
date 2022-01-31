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
  const props = sourceString.split(';')
    .map(prop => prop.split(':').map(elem => elem.trim()));

  const styles = {};

  for (const prop of props) {
    if (prop[0] && prop[1]) {
      styles[prop[0]] = prop[1];
    }
  }

  return styles;
}

module.exports = convertToObject;
