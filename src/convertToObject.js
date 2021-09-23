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
  let string = sourceString.split(';').map((propertieAndValue) =>
    propertieAndValue.split(':'));

  string = string.map((keyAndValue) => {
    keyAndValue[0] = keyAndValue[0].trim();

    return keyAndValue;
  });
  string = string.filter((keyAndValue) => keyAndValue[0] !== '');

  string = string.map((keyAndValue) => {
    keyAndValue[1] = keyAndValue[1].split(' ').filter((value) =>
      value !== '').map((value) =>
      value.trim()).join(' ');

    return keyAndValue;
  });
  console.table(string);

  const result = {};

  for (let i = 0; i < string.length; i++) {
    result[string[i][0]] = string[i][1];
  }

  return result;
}
module.exports = convertToObject;
