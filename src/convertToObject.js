'use strict';

/**
 * Implement convertToObject function:
 *
* Function takes a string with styles
(see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const lines = sourceString.split(';');

  lines.forEach(line => {
    const [property, value] = line.split(':').map(item => item.trim());

    if (property && value) {
      styles[property] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
