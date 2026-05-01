'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedRules = sourceString
    .trim()
    .split(';')
    .map((rule) => rule.split(':'))
    .map((pair) => pair.map((value) => value.trim()))
    .map((pair) => pair.filter((value) => value.length > 0));

  return parsedRules.reduce(
    (acc, cur) => Object.assign(acc, { [cur[0]]: cur[1] }),
    {},
  );
}

module.exports = convertToObject;
