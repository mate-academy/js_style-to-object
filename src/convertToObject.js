'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStyles = sourceString.replace(/\n/g, '')
    .split(';')
    .map(element => element.trim())
    .filter(element => element !== '')
    .map(line => {
      const temp = line.split(':');

      return [temp[0].trim(), temp[1].trim()];
    });
  const result = {};

  arrayOfStyles.forEach(item => {
    result[String(item[0])] = String(item[1]);
  });

  return result;
}

module.exports = convertToObject;
