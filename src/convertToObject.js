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
  const sourceArray = sourceString.split(';');
  const resultObject = {};

  for (let item of sourceArray) {
    item.trim();

    item = item.split(': ');

    if (!item[0] || !item[1]) {
      continue;
    }

    let key = item[0].split('').splice(1).join('');
    let value = item[1];

    key = key.trim();
    value = value.trim();

    resultObject[key] = value;
  }

  return resultObject;
}

module.exports = convertToObject;
