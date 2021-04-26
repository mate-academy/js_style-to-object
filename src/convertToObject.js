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
  // const filteredString = s.replaceAll(/\n/g, '').split(' ').join('');
  // const filteredString = sourceString.split(' ').join('');
  const arr = sourceString.split(';');
  // const sorted = arr.sort((a, b) => {
  //   return a.localeCompare(b);
  // });
  const finalArr = arr.filter(string => string.trim().length > 0)
    .map(string => {
      return string.split(':');
    });
  const obj = {};

  finalArr.forEach(([key, value]) => {
    if (value) {
      obj[key.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
