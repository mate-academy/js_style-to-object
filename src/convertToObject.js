'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrSplit = sourceString.trim().split(';');
  const arrSplit1 = [];
  for (let i = 0; i < arrSplit.length; i++) {
    arrSplit1.push(arrSplit[i].trim().split(':'));
  }

  if (arrSplit1.length - 1 === '') {
    arrSplit1.pop();
  };

  arrSplit1.pop();
  const obj = {};
  for (let i = 0; i < arrSplit1.length; i++) {
    obj[arrSplit1[i][0].trim()] = arrSplit1[i][1].trim();
  }

  return obj;
}
module.exports = convertToObject;
