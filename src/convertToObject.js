'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesArr = sourceString.split(';')
    .map(properties => properties.trim())
    .filter(removeEmptyString => removeEmptyString.length > 1)
    .map(element => element.split(':'));

  return propertiesArr.reduce((prev, properties) => ({
    ...prev, [properties[0].trim()]: properties[1].trim(),
  }), {});
}

module.exports = convertToObject;
