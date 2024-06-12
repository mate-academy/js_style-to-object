'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};
  const properties = sourceString.split(';')
    .map(property => property.trim()).filter(property => property.length > 0);

  properties.forEach(
    property => {
      const styleProperty = property.split(':');

      object[styleProperty[0].trim()] = styleProperty[1].trim();
    }
  );

  return object;
}

module.exports = convertToObject;
