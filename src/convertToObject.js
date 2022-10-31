'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const StylesObject = {};

  const styleArr = sourceString.split(';');

  const trimedStylesArr = styleArr.map(style =>
    style.trim()).filter(style => style);

  trimedStylesArr.forEach(style => {
    const styleValue = style.split(':');

    StylesObject[styleValue[0].trim()] = styleValue[1].trim();
  });

  return StylesObject;
}

module.exports = convertToObject;
