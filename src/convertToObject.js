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
  const styles = sourceString.trim().split(';');
  const styleObj = {};

  const styleArray = styles.map(style => {
    if (style.trim().split(':').filter(Boolean).length > 0) {
      return style.trim().split(':');
    }
  });

  styleArray.map(value => {
    if (value !== undefined) {
      styleObj[value[0].trim()] = value[1].trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
