'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyObject = {};

  if (sourceString === '') {
    return {};
  }

  if (typeof sourceString !== 'string') {
    return sourceString;
  }

  const propertyArray = sourceString.split(';');

  propertyArray.forEach((elem) => {
    const [key, value] = elem.split(':').map((prop) => prop.trim());

    propertyObject[key] = value;
  });

  return propertyObject;
}

module.exports = convertToObject;
