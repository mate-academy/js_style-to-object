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
  const sourceStringArr = sourceString.split(';');
  const stylesObj = {};
  const sourceArrSplit = sourceStringArr.map(el => el.split(':'));
  const sourceArrTrim = sourceArrSplit.map(el => el.map(item => item.trim()));
  const stylesArray = sourceArrTrim.filter(el => el[0] !== '');

  stylesArray.forEach(el => {
    stylesObj[el[0]] = el[1];
  });

  return stylesObj;
}

module.exports = convertToObject;
