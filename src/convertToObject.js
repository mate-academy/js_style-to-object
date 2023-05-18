'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const styles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  styles.forEach(style => {
    const trimmedStyle = style.split(':');

    const property = trimmedStyle[0].trim();
    const value = trimmedStyle[1].trim();

    styleObject[property] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
