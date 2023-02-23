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
  const styles = {};
  const styleArr = sourceString.split(';');

  styleArr.forEach(arr => {
    const style = arr.trim();

    if (style.length === 0) {
      return undefined;
    }

    const styleIndex = style.indexOf(':');

    if (styleIndex === -1) {
      return undefined;
    }

    const prop = style.substring(0, styleIndex).trim();
    const value = style.substring(styleIndex + 1).trim();

    styles[prop] = value;
  });

  return styles;
}

module.exports = convertToObject;
