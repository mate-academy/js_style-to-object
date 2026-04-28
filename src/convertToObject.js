'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const result = {};

  const declarations = styles.split(';');

  for (let i = 0; i < declarations.length; i++) {
    const item = declarations[i].trim();

    if (item === '') {
      continue;
    }

    const parts = item.split(':');

    const key = parts[0].trim();
    const value = parts[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
