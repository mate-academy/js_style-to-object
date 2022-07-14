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
  const newVersion = {};
  const newStyle = sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element.length > 0);

  for (const style of newStyle) {
    const value = style.split(':').map(el => el.trim());

    newVersion[value[0]] = value[1];
  }

  return newVersion;
}

module.exports = convertToObject;
