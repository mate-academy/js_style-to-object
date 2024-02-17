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
  const sourceArrSplit = sourceStringArr.map(splitItem => splitItem.split(':'));
  const sourceArrTrim = sourceArrSplit.map(stylePair =>
    stylePair.map(part => part.trim()));
  const stylesArray = sourceArrTrim.filter(itemToFilter =>
    itemToFilter[0] !== '');

  stylesArray.forEach(pairOfStyles => {
    stylesObj[pairOfStyles[0]] = pairOfStyles[1];
  });

  return stylesObj;
}

module.exports = convertToObject;
