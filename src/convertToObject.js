'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .forEach(style => {
      const styleProp = style.split(':')[0];
      const styleValue = style.split(':')[1];

      if (styleValue !== undefined) {
        styles[styleProp.trim()] = styleValue.trim();
      }
    });

  return styles;
}

module.exports = convertToObject;
