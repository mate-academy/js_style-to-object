'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleProperties = sourceString
    .split(';')
    .join('')
    .split('\n')
    .filter(style => style.trim().length);

  const cssFormatProperties = {};

  for (const styleProperty of styleProperties) {
    const entries = styleProperty.split(':');
    const key = entries[0].trim();
    const value = entries[1].trim();

    cssFormatProperties[key] = value;
  }

  return cssFormatProperties;
}

module.exports = convertToObject;
