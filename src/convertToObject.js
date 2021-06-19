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
  // write your code here
  const formatedString = sourceString.replace(/\n/g, '');
  const arr = formatedString.split(';');
  const arrMap = arr.map(value => value.split(':'));
  const removeFakeValue = arrMap.filter(value => value.length > 1);
  const arrTrim = removeFakeValue.map(value =>
    [value[0].trim(), value[1].trim()]);
  const result = Object.fromEntries(arrTrim);

  return result;
}

module.exports = convertToObject;
