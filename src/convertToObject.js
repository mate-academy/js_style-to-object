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
    .filter((declaration) => declaration.trim());

  const pairs = declarations.map((declaration) => declaration.split(':'));

  const styles = pairs.reduce((acc, [key, value]) => {
    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return styles;
}

module.exports = convertToObject;
