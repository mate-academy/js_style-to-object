'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObject = {};

  if (!sourceString || typeof sourceString !== 'string') {
    return {};
  }

  sourceString.split(';').forEach((declaration) => {
    const declarationElements = declaration.split(':');

    if (declarationElements[0].trim() !== '' && declarationElements[1]) {
      const key = declarationElements[0].trim();
      const value = declarationElements[1].trim();

      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
