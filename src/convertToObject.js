'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString
    .split(';')
    .filter((property) => property.trim() !== '');

  const objectProperties = sourceArray.reduce((acc, property) => {
    const propertyArray = property.trim().split(':', 2);
    const [keyName, keyValue] = propertyArray;

    if (keyName && keyValue) {
      acc[keyName.trim()] = keyValue.trim();
    }

    return acc;
  }, {});

  return objectProperties;
}
module.exports = convertToObject;
