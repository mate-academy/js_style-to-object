'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach(stringProperty => {
    const [prop, value] = stringProperty.split(':');

    if (value) {
      styleObject[prop.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
