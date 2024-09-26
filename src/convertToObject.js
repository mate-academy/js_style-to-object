'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const a = sourceString.split('\n  ').join('').split(';');
  a.pop(a.length);// delete last element (\n)
  const css = {};
  for (let i of a) {
    i = i.split(':');
    css[i[0].trim()] = i[1].trim();
  }
  return css;
}

module.exports = convertToObject;
