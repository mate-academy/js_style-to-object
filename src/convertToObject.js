'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const stylesObject = {};
  const rulesList = sourceString.split(';');

  rulesList.forEach((style) => {
    const [rule, value] = style.split(':');

    if (rule && value && rule.trim !== '') {
      stylesObject[rule.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
