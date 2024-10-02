'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const [property, value] = declaration
      .split(':')
      .map((item) => item && item.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
