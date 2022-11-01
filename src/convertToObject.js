'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const values = sourceString.split(';');
  const styles = {};

  values.filter(value => value.includes(':')).forEach(value => {
    const key = value.split(':');
    const trimmedName = key[0].trim();
    const trimmedProperty = key[1].trim();

    styles[trimmedName] = trimmedProperty;
  });

  return styles;
}

module.exports = convertToObject;
