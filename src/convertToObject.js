'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString.split(';').reduce((prev, style) => {
    const [key, value] = style.split(':').map(item => item.trim());

    if (key && value) {
      prev[key] = value;
    }

    return prev;
  }, {});

  return styles;
}

module.exports = convertToObject;
