'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  //  write your code here
  const rezult = {};
  const stringToArr = sourceString.split(';');
  const arrSplit = stringToArr.map(item => item.split(':'));
  const arrTrim = arrSplit.map(item => item.map(elem => elem.trim()));
  const joinArr = arrTrim.filter(item => !item.every(items => items === ''));

  joinArr.forEach(item => {
    rezult[item[0]] = item[1];
  });

  return rezult;
}

module.exports = convertToObject;
