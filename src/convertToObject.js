'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyValueString = sourceString.split(';');
  const result = {};

  for (const property of propertyValueString) {
    // Checks and skips if property is not valid
    if (property === '' || !property.includes(':')) {
      continue;
    }

    // Saves current property name and value
    let [propertyName, propertyValue] = property.split(':');

    propertyName = propertyName.trim();
    propertyValue = propertyValue.trim();

    result[propertyName] = propertyValue;
  }

  return result;
}

module.exports = convertToObject;
