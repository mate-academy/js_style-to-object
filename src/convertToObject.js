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
  const styles = sourceString
    .split(';')
    .reduce((prevStyle, style) => {
      const splittedStyle = style.split(':');

      if (splittedStyle[1]) {
        return {
          ...prevStyle,
          [splittedStyle[0].trim()]: splittedStyle[1].trim(),
        };
      }

      return prevStyle;
    }, {});

  return styles;
}

module.exports = convertToObject;
