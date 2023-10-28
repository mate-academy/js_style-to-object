'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an
 example in[stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  let stylesArr = sourceString.split(';')
    .map((str) => str.split(':'));

  stylesArr = stylesArr.filter((arr) => arr.length > 1);

  stylesArr.forEach((arr) => {
    stylesObject[arr[0].trim()] = arr[1].trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
