'use strict';

/**
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
