'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedString = {};
  const styles = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length > 0);

  for (const style of styles) {
    const key = style.split(':').map(property => property.trim());

    convertedString[key[0]] = key[1];
  }

  return convertedString;
}

module.exports = convertToObject;
