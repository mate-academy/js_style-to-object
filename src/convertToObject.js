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
  const stylesList = sourceString.split(';').filter(v => v.trim());
  const stylesObj = {};

  stylesList.map(style => {
    const newStyle = style.split(':');

    stylesObj[newStyle[0].trim()] = newStyle[1].trim();

    return newStyle;
  });

  return stylesObj;
}

module.exports = convertToObject;
