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
  // write your code here
  const styles = {};
  const properties = sourceString.split(';');

  properties.forEach(property => {
    const [name, value] = property
      .split(':')
      .map(part => part.trim());

    if (name && value) {
      styles[name] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
