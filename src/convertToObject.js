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
  // write your code here
  const styleArray = sourceString.split(';')
    .filter((item) => item.trim() !== '');

  const stuleObj = {};

  styleArray.forEach((style) => {
    const [property, value] = style.split(':').map((part) => part.trim());

    stuleObj[property] = value;
  });

  return stuleObj;
}

module.exports = convertToObject;
