'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.split(';');
  const cssProperties = {};

  for (const item of stylesList) {
    const property = item.split(':');

    if (property[0] && property[1]) {
      const key = property[0].trim();
      const value = property[1].trim();

      cssProperties[key] = value;
    }
  }

  return cssProperties;
}

module.exports = convertToObject;
