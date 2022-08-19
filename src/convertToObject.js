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

  const stylesArray = sourceString
    .split(';')
    .filter(styleItem => styleItem.trim());

  stylesArray.forEach((styles) => {
    let style = styles.split(':');

    style = style.map(styleItem => styleItem.trim());

    stylesObject[style[0]] = style[1];
  });

  return stylesObject;
}

module.exports = convertToObject;
