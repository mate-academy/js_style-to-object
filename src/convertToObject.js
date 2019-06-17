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
  const normalized = sourceString.trim()
    .split(';')
    .map(row => row.trim().split(': '));

  function arrayToObj(prop) {
    obj[prop[0]] = prop[1];
  };

  const obj = {};
  normalized.forEach(arrayToObj);

  return obj;
}

module.exports = convertToObject;
