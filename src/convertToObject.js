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
    .reduce((prev, styleStr) => {
      const style = styleStr.split(':');

      if (style.length > 1) {
        const styleName = style[0].trim();
        const styleValue = style[1].trim();

        return {
          ...prev,
          [styleName]: styleValue,
        };
      }

      return prev;
    }, {});

  return styles;
}

module.exports = convertToObject;
