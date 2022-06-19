'use strict';

/**
 * Implement convertToObject function:
 *
 *
 *
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const Obj = {};
  const styleArr = sourceString
    .split(';')
    .map(el => el.trim().split(':'))
    .filter(arr => arr.length > 1);

  for (const style of styleArr) {
    const key = style[0].trim();
    const value = style[1].trim();

    Obj[key] = value;
  }

  return Obj;
}

module.exports = convertToObject;
