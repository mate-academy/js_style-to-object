'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .filter((declaration) => declaration.trim() !== '')
    .forEach((declaration) => {
      const parts = declaration.split(':').map((part) => part.trim());
      const [property = '', value = ''] = parts;

      if (property !== '' && value !== '') {
        stylesObject[property] = value;
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
