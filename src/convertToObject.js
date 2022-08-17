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
  const stylesObject = {};
  const stylesArray = sourceString.split(';');

  stylesArray.forEach((styles) => {
    let style = styles.split(':');

    style = style.map(e =>
      e.toString(e)
        .trim()
        .replace(/[\n]/g, ''))
      .filter(e => e.length !== 0);

    if (style[0] !== undefined) {
      stylesObject[style[0]] = style[1];
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
