'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const sourseArray = sourceString.split(';');
  const wihtoutSpaces
   = sourseArray.map(el => el.trim()).filter(el => el !== '');

  const arrSplited = wihtoutSpaces.map(el => el.split(':'));

  arrSplited.forEach(el => {
    result[el[0].trim()] = el[1].trim();
  });

  return result;
}

module.exports = convertToObject;
