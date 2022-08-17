'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  sourceString
    .split(';')
    .filter(s => s.trim().length)
    .forEach(prop => {
      const [ propName, propValue ] = prop.split(':');

      cssStyles[propName.trim()] = propValue.trim();
    });

  return cssStyles;
}

module.exports = convertToObject;
