'use strict';

/**
 * @param {string} styleString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const declarations = styleString.split(';').filter((item) => item.trim());

  const styleObject = declarations.reduce((acc, declaration) => {
    if (!declaration.includes(':')) {
      return acc;
    }

    const [property, value] = declaration.split(':', 2);

    if (!value) {
      return acc;
    }

    acc[property.trim()] = value.trim();

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
