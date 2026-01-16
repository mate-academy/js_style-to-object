'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = sourceString
    .trim()
    .split(';')
    .filter((s) => s.trim() !== '');

  const stylesObject = {};

  result.forEach((mod) => {
    const idX = mod.indexOf(':');

    const key = mod.slice(0, idX).trim();
    const value = mod.slice(idX + 1, mod.length).trim();

    // @ts-ignore
    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
