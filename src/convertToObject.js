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
  let styleArray = sourceString.trim().split(';');

  styleArray = styleArray.map(item => item.split(':'));

  styleArray = styleArray.map(item => item.map(element => element.trim()));

  styleArray = styleArray.filter(item => item.length !== 1);

  const styleObject = Object.fromEntries(styleArray);

  return styleObject;
}

module.exports = convertToObject;
