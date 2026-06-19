'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const convertableString = styleDeclarations.reduce((stylesObject, line) => {
    const [key, value] = line.trim().split(':');

    if (key && value) {
      stylesObject[key.trim()] = value.trim();
    }

    return stylesObject;
  }, {});

  return convertableString;
}

module.exports = convertToObject;
