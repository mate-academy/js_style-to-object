'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0);

  const pairs = declarations.map((declaration) => {
    return declaration.split(':').map((item) => item.trim());
  });
  const styles = {};

  pairs.forEach((pair) => {
    const property = pair[0];
    const value = pair[1];

    styles[property] = value;
  });

  return styles;
}

module.exports = convertToObject;
