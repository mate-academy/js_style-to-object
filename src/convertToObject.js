'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el.length > 0);

  return stylesArray.reduce((stylesObj, style) => {
    const [styleKey, styleValue] = style.split(':')
      .map(piece => piece.trim());

    stylesObj[styleKey] = styleValue;

    return stylesObj;
  }, {});
}

module.exports = convertToObject;
