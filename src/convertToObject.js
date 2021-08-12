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
  // write your code here
  const sourceStringToArray = sourceString
    .split(';')
    .map(el => el.split(': '))
    .filter(el => el.length > 1);

  const cssProperties = sourceStringToArray
    .reduce((propertiesStorage, [key, value]) => {
      propertiesStorage[key.trim()] = value.split(';')[0].trim();

      return propertiesStorage;
    }, {});

  return cssProperties;
}

module.exports = convertToObject;
