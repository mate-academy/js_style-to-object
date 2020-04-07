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
  const objMap = {};

  sourceString.split(';')
    .forEach(property => {
      if (property.trim(':') !== '') {
        objMap[property.split(':')[0].trim()] = property.split(':')[1].trim();
      }
    });

  return objMap;
}

module.exports = convertToObject;
