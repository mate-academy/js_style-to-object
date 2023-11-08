'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesObj = {};

  const arrFromSource = sourceString.split(';');
  const newArrSplit = arrFromSource.map(item => item.split(':'));
  const arrFilter = newArrSplit.filter(item => item.length > 1);

  arrFilter.forEach(item => {
    stylesObj[item[0].trim()] = item[1].trim();
  });

  return stylesObj;
}

module.exports = convertToObject;
