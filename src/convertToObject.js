'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};
  const arrayOfStyles = sourceString.split(';')
    .map(css => css.split(':'));

  arrayOfStyles.forEach(css => {
    if (css.length > 1) {
      const key = css[0].trim();
      const value = css[1].trim();

      styleObj[key] = value;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
