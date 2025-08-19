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

  properties.forEach((property) => {
    const parts = property.split(':');
    const propertyName = String(parts[0]).trim();
    const propertyValue = String(parts[1] || '').trim();

    if (propertyName === '') {
      return;
    }

    finalObj[propertyName] = propertyValue;
  });

  return finalObj;
}

module.exports = convertToObject;
