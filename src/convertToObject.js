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
        const [key, value] = property.split(':');

        objMap[key.trim()] = value.trim();
      }
    });

  return objMap;
}

module.exports = convertToObject;
