'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString.split(';').forEach((declaration) => {
    const [property, value] = declaration.split(':');

    if (property && value && property.trim() !== '' && value.trim() !== '') {
      stylesObject[property.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
