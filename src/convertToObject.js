'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const styles = sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element.length > 0);

  for (const style of styles) {
    const key = style.split(':').map(attribute => attribute.trim());

    obj[key[0]] = key[1];
  }

  return obj;
}

module.exports = convertToObject;
