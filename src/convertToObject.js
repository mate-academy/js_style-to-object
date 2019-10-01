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
  const result = {};
  const splitPattern = /;\n/g;
  const splitStr = sourceString.split(splitPattern);
  splitStr.pop();
  let point;

  for (let i = 0; i < splitStr.length; i++) {
    point = splitStr[i].trim().indexOf(': ');
    const key = splitStr[i].trim().slice(0, point);
    result[key] = splitStr[i].trim().slice((point + 2), (splitStr[i].length));
  }

  return result;
}

module.exports = convertToObject;
