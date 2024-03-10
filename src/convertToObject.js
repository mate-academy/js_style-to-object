'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmedString = sourceString
    .split(';')
    .filter((item) => item.trim() !== '');

  const propertyValuePairs = trimmedString.map((item) => {
    const [property, value] = item.split(':');

    return [property.trim(), value.trim()];
  });

  const resultingObject = {};

  propertyValuePairs.map((item) => {
    resultingObject[item[0]] = item[1];
  });

  return resultingObject;
}

module.exports = convertToObject;
