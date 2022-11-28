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
    const properties = style.split(':');
    const key = properties[0].replace(/[\n\r]/g, ' ').trim();
    const value = properties[1];

    if (value !== undefined) {
      stylesProperties[key] = value.trim();
    }
  });

  return stylesProperties;
}

module.exports = convertToObject;
