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
  const listOfStyles = sourceString.split(';')
    .map(element => element.trim())
    .filter(element => element !== '')
    .map(line => {
      const temp = line.split(':');

      return [temp[0].trim(), temp[1].trim()];
    });
  const style = {};

  listOfStyles.forEach(item => {
    style[item[0]] = item[1];
  });

  return style;
}

module.exports = convertToObject;
