'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.trim().split(';');

  const stylesObj = {};

  declarations.forEach((declaration) => {
    const parts = declaration.split(':');

    if (parts.length === 2) {
      const property = parts[0].trim();
      let value = parts[1].trim();

      if (value.includes('!important')) {
        value = value.replace('!important', '').trim() + ' !important';
      }

      if (property && value) {
        stylesObj[property] = value;
      }
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
