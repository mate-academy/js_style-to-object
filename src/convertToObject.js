'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const splitedSourceString = sourceString.split(';');
  const convertedToObject = {};

  for (let item of splitedSourceString) {
    item.trim();

    item = item.split(': ');

    if (!item[0] || !item[1]) {
      continue;
    }

    let key = item[0].split('').splice(1).join('');
    let value = item[1];

    key = key.trim();
    value = value.trim();

    convertedToObject[key] = value;
  }

  return convertedToObject;
}

module.exports = convertToObject;
