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
  const modifyString = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter(el => el !== '');

  const propertys = {};

  modifyString.forEach(str => {
    const [property, value] = str
      .split(':')
      .map(el => el.trim());

    propertys[property] = value;
  });

  return propertys;
}

module.exports = convertToObject;
