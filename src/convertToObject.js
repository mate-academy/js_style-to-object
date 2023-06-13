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
  const styles = {};
  const properties = sourceString.split(';');

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i].trim();

    if (!property) {
      continue;
    }

    const [key, value] = property.split(':');

    styles[key.trim()] = value.trim();
  }

  return styles;
}

module.exports = convertToObject;
