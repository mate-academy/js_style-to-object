'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArr = sourceString.split(';');
  const objStyles = {};
  const styleNames = [];

  for (let i = 0; i < styleArr.length; i++) {
    styleNames.push(styleArr[i].split(':'));
  }

  for (let i = 0; i < styleNames.length; i++) {
    const a = styleNames[i];

    if (a.length > 1) {
      objStyles[a[0].trim()] = a[1].trim();
    }
  }

  return objStyles;
}

module.exports = convertToObject;
