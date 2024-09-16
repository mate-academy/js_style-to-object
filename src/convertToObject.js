'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (sourceString) => {
  const obj = {};
  const arr = sourceString.replace(/;/g, ':').replace(/\n/g, '').split(':');
  for (let i = 0; i < arr.length - 1; i += 2) {
    obj[arr[i].trim()] = arr[i + 1].trim();
  }
  return obj;
};
module.exports = convertToObject;
