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
  const sourceStringToArr = sourceString.split(';')
    .map(item => item.split(': '))
    .filter(item => item.length === 2);
  const properties = {};

  sourceStringToArr.reduce((prev, item) => {
    properties[item[0].trim()] = item[1].trim();
  }, 0);

  return properties;
}

module.exports = convertToObject;
