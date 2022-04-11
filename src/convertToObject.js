'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrayProperties = sourceString.split(';')
    .map(property => property.split(':'));
  const styleObj = {};

  arrayProperties.forEach(property => {
    if (property.length === 2) {
      const key = property[0].trim();
      const value = property[1].trim();

      styleObj[key] = value;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
