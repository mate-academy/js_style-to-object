'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');
  const result = {};

  for (const property of properties) {
    const [prop, value] = property.split(':');
    if (prop && value) {
      const propName = prop.trim();
      const propValue = value.trim();
      result[propName] = propValue;
    }
  }

  return result;
}

module.exports = convertToObject;
