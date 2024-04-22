'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .filter((declaration) => declaration.length > 0);

  const stylesObject = declarations.reduce((acc, declaration) => {
    const [property, value] = declaration.split(':').map((item) => item.trim());

    acc[property] = value;

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
