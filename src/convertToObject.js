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
  const objCss = {};
  const arrValues = sourceString.split(';')
    .join(':')
    .split(':')
    .map(value => value.trim())
    .filter(value => value !== '');

  for (let i = 0; i < arrValues.length; i += 2) {
    objCss[arrValues[i]] = arrValues[i + 1];
  }

  return objCss;
};

module.exports = convertToObject;
