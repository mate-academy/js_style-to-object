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
  let properties = sourceString.split('\n');
  let PropertiesTrimed = '';
  for (let i = 0; i < properties.length; i++) {
    PropertiesTrimed += (properties[i]).trim();
  }
  let arr = PropertiesTrimed.split(';');
  arr.pop();
  let cssObject = {};
  arr.forEach(function(property) {
    let key = property.split(': ');
    cssObject[key[0]] = key[1];
  });
  return cssObject;
}

module.exports = convertToObject;
