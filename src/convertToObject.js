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
  const styleArr = sourceString.split(';')
    .split(':')
    .map(values => values.trim());

  const styles = styleArr.reduce((prev, style) => {
    if (style[0] !== '') {
      return {
        ...prev,
        [style[0]]: style[1],
      };
    };
  }, {});

  return styles;
}

module.exports = convertToObject;
