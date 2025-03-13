'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule !== '')
    .map((rule) => rule.split(':').map((part) => part.trim()))
    .forEach((rule) => (result[rule[0]] = rule[1]));

  return result;
}

module.exports = convertToObject;
