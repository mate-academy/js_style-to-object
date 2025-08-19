'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  const properties = sourceString.split(';');
  const finalObj = {};

  for (const property of properties) {
    const parts = property.split(':');
    const propertyName = String(parts[0]).trim();
    const propertyValue = String(parts[1]).trim();

    if (propertyName === '') {
      continue;
    }

    finalObj[propertyName] = propertyValue;
  }

  return finalObj;
}

module.exports = convertToObject;
