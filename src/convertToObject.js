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
  const properties = sourceString.split('\n');
  let propertiesTrimed = '';
  let cssObject = {};
  let arr = [];
  for (let prop of properties) {
    propertiesTrimed += prop.trim();
  }
  arr = propertiesTrimed.split(';');
  arr.forEach((property) => {
    let key = property.split(': ');
    if (key[0] !== '') {
      cssObject[key[0]] = key[1];
    }
  });
  return cssObject;
};

module.exports = convertToObject;
