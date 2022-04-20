'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const begin = sourceString.replace(/\r?\n/g, '');

  const lines = begin.split(';').map((line) => line.split(':'));

  const resultObj = lines.reduce(function(obj, [ key, value ]) {
    if (key && value) {
      obj[key.trim()] = value.trim();
    } else {
      return obj;
    }

    return obj;
  }, {});

  return resultObj;
}
module.exports = convertToObject;
