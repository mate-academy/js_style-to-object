'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const processedSourceString = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0);

  const stylesObj = {};

  processedSourceString.map((style) => {
    const propertyAndValue = style.split(':');

    return (stylesObj[propertyAndValue[0].trim()] = propertyAndValue[1].trim());
  });

  return stylesObj;
}

module.exports = convertToObject;
