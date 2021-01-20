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
  const arr = sourceString.split(';');
  const arr2 = arr.map(el => el.split(':'));

  const obj = {};

  arr2.forEach(el => {
    if (el[0] && el[1]) {
      obj[el[0].trim()] = el[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
