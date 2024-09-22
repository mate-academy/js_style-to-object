'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleRules = sourceString.replace(/;\s*;/g, ' ').trim().split(';');
  const stylesObject = {};

  styleRules.forEach((element) => {
    const [key, value] = element.split(':');

    if (value !== undefined) {
      stylesObject[key.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
