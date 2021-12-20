'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const arr = sourceString.split(';');
  const nevArr = arr.map((el) => el.split(':'));

  for (const key of nevArr) {
    if (key.length > 1) {
      obj[key[0].trim()] = key[1].trim();
    }
  }

  return (obj);
}

module.exports = convertToObject;
