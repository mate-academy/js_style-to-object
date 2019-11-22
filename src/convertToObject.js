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
  const resObj = {};
  sourceString
    .split(';')
    .map((str) => {
      return str.trim();
    })
    .filter((str) => {
      return (str !== '');
    })
    .map(function(str) {
      const propertyString = str
        .split(':')
        .map((item) => {
          return item.trim();
        });
      resObj[propertyString[0]] = propertyString[1];
    });
  return resObj;
}
module.exports = convertToObject;
