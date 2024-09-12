'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString.split(';');

  const resultObject = cssProperties.reduce((currentObject, property) => {
    const [partName, partValue] = property.split(':').map((str) => str.trim());

    if (partName && partValue) {
      currentObject[partName] = partValue;
    }

    return currentObject;
  }, {});

  return resultObject;
}

module.exports = convertToObject;
