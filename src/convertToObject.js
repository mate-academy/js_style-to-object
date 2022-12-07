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
  const stylesCss = sourceString.split(';');

  return stylesCss.reduce((css, styles) => {
    const props = styles.split(':');
    const key = props[0];
    const value = props[1];

    if (value) {
      css[key.trim()] = value.trim();
    }

    return css;
  }, {});
}

module.exports = convertToObject;
