'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const declaration = sourceString.split(';').map((part) => part.trim());

  declaration.forEach((declarationString) => {
    if (!declarationString) {
      return;
    }

    const [key, value] = declarationString.split(':');

    if (value === undefined) {
      return;
    }

    stylesObject[key.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
