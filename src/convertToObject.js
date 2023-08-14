'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};

  const allStyles = sourceString.split(';');

  const stylesAndProperties = allStyles.map((parts) => parts
    .split(':')
    .map((part) => part.trim())
  );

  stylesAndProperties.forEach((keyAndValue) => {
    if (keyAndValue.length > 1) {
      convertedObject[keyAndValue[0]] = keyAndValue[1];
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
