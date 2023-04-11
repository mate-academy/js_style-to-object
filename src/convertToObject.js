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
  const legal = 'abcdefghijklmnopqrstuvwxyz'
    + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-.!#';

  styles.forEach((style) => {
    const styleParts = style.split(':');
    let hitFirstLetter = false;

    if (styleParts[1] !== undefined) {
      const correctedStyleParts = ['', ''];

      styleParts[0].split('').forEach((letter) => {
        if (legal.includes(letter)) {
          correctedStyleParts[0] += letter;
        }
      });

      styleParts[1].split('').forEach((letter, index) => {
        if (legal.includes(letter)) {
          hitFirstLetter = true;
          correctedStyleParts[1] += letter;
        } else if (letter === ' '
        && legal.includes(styleParts[1][index + 1])
        && index + 1 !== styleParts[1].length
        && hitFirstLetter === true) {
          correctedStyleParts[1] += letter;
        }
      });

      stylesObject[correctedStyleParts[0]] = correctedStyleParts[1];
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
