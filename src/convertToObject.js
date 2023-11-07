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
  const cssObject = {};

  const cssArray = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0);

  cssArray.forEach(cssStyle => {
    const [key, value] = cssStyle.split(':');

    cssObject[key.trim()] = value.trim();
  });

  return cssObject;
}

module.exports = convertToObject;
