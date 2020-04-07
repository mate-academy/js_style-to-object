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
  const obj = {};
  const props = sourceString.trim().split(';');

  for (let i = 0; i < props.length; i++) {
    if (props[i] !== '') {
      const arrItem = props[i].split(':');

      if (arrItem.length > 1) {
        obj[arrItem[0].trim()] = arrItem[1].trim();
      }
    }
  }

  return obj;
}

module.exports = convertToObject;
