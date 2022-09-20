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
  // write your code here
  const styles = sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element !== '');

  const correctStyles = {};

  for (let i = 0; i < styles.length; i++) {
    const keys = styles[i]
      .slice(0, styles[i]
        .indexOf(':')).trim();
    const values = styles[i]
      .slice(styles[i]
        .indexOf(':') + 1).trim();

    correctStyles[keys] = values;
  }

  return correctStyles;
}

module.exports = convertToObject;
