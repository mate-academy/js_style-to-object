'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const SEMICOLON = ';';
const COLON = ':';

function convertToObject(sourceString) {
  const stylesAndProperties = sourceString
    .split(SEMICOLON)
    .map((parts) => parts
      .split(COLON)
      .map((part) => part.trim()));

  const convertedObject = stylesAndProperties
    .reduce((resultedObject, keyAndValue) => {
      if (keyAndValue.length > 1) {
        resultedObject[keyAndValue[0]] = keyAndValue[1];
      }

      return resultedObject;
    }, {});

  return convertedObject;
}

module.exports = convertToObject;
