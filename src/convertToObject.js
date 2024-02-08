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
  const lines = sourceString.split('\n');
  const filteredLines = lines.filter(
    line => line.trim() !== '' && line.trim() !== ';'
  );

  const keyValuePairs = filteredLines.map(line => {
    const [key, value] = line.split(':');

    return [key.trim(), value.slice(0, value.length - 1).trim()];
  });

  return keyValuePairs.reduce((result, [key, value]) => {
    return {
      ...result, [key]: value,
    };
  }, {});
}

module.exports = convertToObject;
