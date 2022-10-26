'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styl
 * and returns an object where CSS properties are keys
 * and values are the values otest.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.replace(/\n/g, '')
    .split(';')
    .filter(item => item.includes(':'))
    .map(str => str.split(':')
      .map(array => array.trim()))
    .reduce(createObj, {});
}

const createObj = (object, cur) => {
  return {
    ...object,
    [cur[0]]: cur[1],
  };
};

module.exports = convertToObject;
