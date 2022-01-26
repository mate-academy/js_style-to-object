'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arrOfString = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter(el => el !== '');

  const properties = {};

  arrOfString.forEach(str => {
    const [propertie, value] = str.split(':').map(el => el.trim());

    properties[propertie] = value;
  });

  return properties;
}

module.exports = convertToObject;
