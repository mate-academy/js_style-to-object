/* eslint-disable max-len */
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
  const styles = {};
  const arr = sourceString.split('\n');

  arr.forEach(line => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('//') || trimmedLine.startsWith('/*') || trimmedLine === '') {
      return;
    }

    const properties = trimmedLine.split(';');

    properties.forEach(property => {
      const [key, value] = property.split(':').map(str => str.trim());

      if (key && value) {
        styles[key] = value;
      }
    });
  });

  return styles;
}

module.exports = convertToObject;
