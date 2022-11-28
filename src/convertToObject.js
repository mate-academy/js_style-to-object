'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesProperties = {};
  const stylesCss = sourceString.split(';');

  stylesCss.forEach(style => {
    const propertie = style.split(':');
    const key = propertie[0].replace(/[\n\r]/g, ' ').trim();
    const value = propertie[1];

    if (propertie[1] !== undefined) {
      stylesProperties[key] = value.trim();
    }
  });

  return stylesProperties;
}

module.exports = convertToObject;
