'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .filter((line) => line.trim() !== '');

  return declarations.reduce((acc, declaration) => {
    const [property, value] = declaration.split(':');

    acc[property.trim()] = value.trim();

    return acc;
  }, {});
}

module.exports = convertToObject;
