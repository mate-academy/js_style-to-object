'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleProperties = {};
  const styleDeclarations = sourceString
    .split(';')
    .filter((style) => style.length !== 0);

  styleDeclarations.forEach((style) => {
    const [property, value] = style.split(':').map((str) => str.trim());

    if (property && value) {
      styleProperties[property] = value;
    }
  });

  return styleProperties;
}
module.exports = convertToObject;
