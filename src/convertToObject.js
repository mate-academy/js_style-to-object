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
  const styleArr = sourceString.split(';')
    .filter(style => style.trim() !== '')
    .map(style => style.trim());

  const resultObj = {};

  styleArr.forEach(style => {
    const [key, value] = style.split(':').map(str => str.trim());

    resultObj[key] = value;
  });

  return resultObj;
}

module.exports = convertToObject;
