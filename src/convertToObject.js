'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const css = {};

  const splittedSource = sourceString.split(';');

  splittedSource.forEach(properties => {
    const property = properties.split(':');

    if (property.length > 1) {
      const key = property[0].trim();
      const value = property[1].trim();

      css[key] = value;
    }
  });

  return css;
}

module.exports = convertToObject;
