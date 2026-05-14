'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const declarations = sourceString
    .split(';')
    .filter((item) => item.trim() !== '');
  const cssProperties = {};

  declarations.forEach((declaration) => {
    const [key, value] = declaration.split(':');

    cssProperties[key.trim()] = value.trim();
  });

  return cssProperties;
}

module.exports = convertToObject;
