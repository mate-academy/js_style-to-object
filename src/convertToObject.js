'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssArray = sourceString.split(';');
  const noEmptyRules = [];
  const objStyles = {};

  for (const ch of cssArray) {
    if (ch.length === 0) {
      continue;
    }
    noEmptyRules.push(ch.split(':'));
  }

  for (const rule of noEmptyRules) {
    objStyles.rule[0] = rule[1];
  }

  return objStyles;
}

module.exports = convertToObject;
