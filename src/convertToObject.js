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

  const styles = {};

  for (const [key, values] of pairs) {
    styles[key.trim()] = values.trim();
  }

  return styles;
}

module.exports = convertToObject;
