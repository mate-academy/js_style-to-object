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
  const styles = sourceString
    .replace(/\n|\r /g, '')
    .split(';')
    .filter(style => style.trim() !== '');
  const cssCode = {};

  styles.every((style, index) => {
    const keyValuePair = style.split(':');

    cssCode[keyValuePair[0].trim()] = keyValuePair[1].trim();

    return true;
  });

  return cssCode;
}

module.exports = convertToObject;
