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
  const sourceArr = sourceString.split(';');
  const styles = {};

  sourceArr.forEach(style => {
    const styleArr = style.split(': ');

    if ((styleArr[0]) && (styleArr[1])) {
      styles[`${styleArr[0]}`.trim()] = `${styleArr[1]}`.trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
