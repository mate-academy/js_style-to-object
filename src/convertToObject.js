'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesArray = stylesString.split(';');
  const stylesObject = {};

  for (let i = 0; i < stylesArray.length; i++) {
    const parts = stylesArray[i].split(':');

    if (parts[0] && parts[1]) {
      const property = parts[0].trim();
      let value = parts[1].trim();

      if (value.includes('!important')) {
        value = value.replace(/\s*!important\s*/, '') + ' !important';
      }

      stylesObject[property] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
