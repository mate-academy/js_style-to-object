'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const styleArray = sourceString.split(';');

  for (const style of styleArray) {
    const styleParams = style.split(':');

    if (styleParams[0] && styleParams[1]) {
      result[styleParams[0].trim()] = styleParams[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
