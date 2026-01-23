'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const sourse = sourceString.trim();
  const declarations = sourse.split(';').filter((style) => style.trim() !== '');

  return declarations.reduce((styles, declaration) => {
    const parts = declaration.split(':');
    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    if (property && value) {
      styles[property] = value;
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
