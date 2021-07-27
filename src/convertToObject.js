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
  let arrValue = [];
  const obj = {};

  arr.map((item) => {
    arrValue = item.split(':');

    const [prop, value] = arrValue;

    if (value !== undefined) {
      obj[prop.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
