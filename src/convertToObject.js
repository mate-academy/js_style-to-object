'use strict';

const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 *
 * and returns an object where CSS properties are keys
 *
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyle = {};
  const newSourceString = sourceString
    .split(/\n/)
    .filter(elem => {
      return elem.length > 3;
    })
    .map(elem => {
      const elemReplace = elem.replace(';', '');

      return elemReplace.split(':');
    });

  newSourceString.forEach(elem => {
    const cssRule = elem[0].trim();
    const cssValue = elem[1].trim();

    cssStyle[cssRule] = cssValue;
  });

  return cssStyle;
}

convertToObject(stylesString);

module.exports = convertToObject;
