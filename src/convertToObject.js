'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const selector = {};
  const declarations = sourceString
    .split(';')
    .map((d) => d.trim())
    .filter(Boolean);

  for (const i of declarations) {
    const parts = i.split(':');

    if (parts.length === 2) {
      selector[parts[0].trim()] = parts[1].trim();
    }
  }

  return selector;
}

module.exports = convertToObject;
