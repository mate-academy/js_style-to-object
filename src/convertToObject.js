'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  sourceString.replace(/;\s*;/g, ' ').trim();

  const styleRules = sourceString.split(';');

  const result = {};

  styleRules.forEach((element) => {
    const [key, value] = element.split(':', 2);

    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
