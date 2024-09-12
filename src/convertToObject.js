'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const allProperties = sourceString.split(';');

  const resultObject = allProperties.reduce((currentObject, property) => {
    const part = property.split(':');
    const partName = part[0]?.trim();
    const partValue = part[1]?.trim();

    if (partName && partValue) {
      currentObject[partName] = partValue;
    }

    return currentObject;
  }, {});

  return resultObject;
}

module.exports = convertToObject;
