'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an
 * example in [stylesString.js](./stylesString.js)) <= Exceeds max length!
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an
 * exampl in [test file](./convertToObject.test.js)) <= Exceeds max length!
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString.split(';');
  const stylesObject = {};

  styles.forEach((style) => {
    const styleParts = style.split(':');

    if (styleParts[1] !== undefined) {
      const correctedStyleParts = ['', ''];

      correctedStyleParts[0] = styleParts[0].trim();
      correctedStyleParts[1] = styleParts[1].trim();

      stylesObject[correctedStyleParts[0]] = correctedStyleParts[1];
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
