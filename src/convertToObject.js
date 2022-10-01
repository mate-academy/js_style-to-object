'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a
 * string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values
 *  of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const cssProperties = sourceString.split(';').map(part => part.split(':'));

  cssProperties.forEach(part => {
    if (part.length === 2) {
      const [key, value] = part;

      styles[key.trim()] = value.trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
