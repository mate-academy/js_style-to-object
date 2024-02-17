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
  let stArr = sourceString.split(';');
  const stObj = {};

  stArr = stArr.map(el => el.split(':'))
    .map(el => el.map(item => item.trim()))
    .filter(el => el[0] !== '');

  stArr.forEach(el => {
    stObj[el[0]] = el[1];
  });

  return stObj;
}

module.exports = convertToObject;
