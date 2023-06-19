'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
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
  const arraySourceString = sourceString.split(';');

  return arraySourceString.reduce((stylesObject, styles) => {
    if (!styles.length) {
      return stylesObject;
    }

    const [key, value] = styles.split(':').map((item) => item.trim());

    if (!value) {
      return stylesObject;
    }

    return {
      ...stylesObject,
      [key]: value,
    };
  }, {});
}

module.exports = convertToObject;
