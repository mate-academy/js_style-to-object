'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const clean = sourceString
    .trim()
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';');

  const sourceArr = clean
    .split(';')
    .filter(Boolean)
    .map((element) => element.split(':'));

  const stylesObject = Object.fromEntries(sourceArr);

  return stylesObject;
}

module.exports = convertToObject;
