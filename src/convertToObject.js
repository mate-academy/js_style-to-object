'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const results = {};
  const stylesList = sourceString.split(';')
    .map(element => element.trim())
    .filter(element => element !== '')
    .map(line => {
      const data = line.split(':');

      return [data[0].trim(), data[1].trim()];
    });

  stylesList.forEach(item => {
    results[item[0]] = item[1];
  });

  return results;
}

module.exports = convertToObject;
