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
  const objectCss = {};

  sourceString.split(';').forEach(line => {
    const [key, value] = line.split(':').map(values => values.trim());

    if (key) {
      objectCss[key] = value;
    }
  });

  return objectCss;
}

module.exports = convertToObject;
