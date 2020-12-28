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
  const arrOfString = sourceString.split(';');

  const arrStrTrim = [];

  arrOfString.map((el) => {
    arrStrTrim.push(el.trim());
  });

  const obj = {};

  arrStrTrim.map(str => {
    if (str.length > 0) {
      const arrKeyProp = str.split(':');
      const key = arrKeyProp[0].trim();
      const value = arrKeyProp[1].trim();

      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
