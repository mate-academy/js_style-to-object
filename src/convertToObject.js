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
  const normArr = arr
    .map(item => item.trim())
    .filter(item => item.length !== 0)
    .map(item => item.split(':')
      .map(key => key
        .trim()));

  const obj = {};

  normArr.map(item => {
    obj[item[0]] = item[1];
  });

  return obj;
}

module.exports = convertToObject;
