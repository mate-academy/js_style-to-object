'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyValues = sourceString
    .trim()
    .split(';')
    .filter((property) => property !== '' && property !== ';');

  const stylesObject = {};

  propertyValues.forEach((value) => {
    const keyValueParts = value
      .split(':')
      .map((part) => part.trim())
      .filter((property) => property !== '');

    if (keyValueParts.length >= 2) {
      stylesObject[keyValueParts[0]] = keyValueParts.slice(1).join(':');
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
