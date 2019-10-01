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
  const Arr = sourceString.split(';');
  Arr.pop();
  const obj = {};
  Arr.forEach((arr) => {
    const prop = arr.split(':');
    obj[prop[0].trim()] = prop[1].trim();
  });
  return obj;
}

module.exports = convertToObject;
