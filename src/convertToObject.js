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
  const styles = {};

  const keyValuePairs = sourceString
    .replace(/\s*;\s*/g, ';')
    .split(';')
    .map(pair => pair.trim());

  keyValuePairs.forEach(pair => {
    const [key, value] = pair.split(':');

    if (key && value) {
      const formattedKey = key.trim();
      const formattedValue = value.trim();

      styles[formattedKey] = formattedValue;
    }
  });

  return styles;
}

module.exports = convertToObject;
