'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString.trim().split(';');
  const propertiesObj = {};

  for (const property of cssProperties) {
    const splitProperty = property.trim().split(':');
    if (splitProperty[0]) {
      propertiesObj[splitProperty[0].trim()] = splitProperty[1].trim();
    }
  }

  return propertiesObj;
}

module.exports = convertToObject;
