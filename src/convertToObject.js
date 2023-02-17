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
  const styles = sourceString.split(';');
  const style = styles.map(values =>
    values.split(':').map(value => value.trim()));
  const result = {};

  for (const key of style) {
    if (key[0] !== '') {
      result[key[0]] = key[1];
    }
  }

  return result;
}

module.exports = convertToObject;
