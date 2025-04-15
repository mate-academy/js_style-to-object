'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styledObject = {};
  const cssRules = sourceString.split(';');

  cssRules.forEach((parts) => {
    const [key, value] = parts.split(':');

    if (key && value) {
      styledObject[key.trim()] = value.trim();
    }
  });

  return styledObject;
}

module.exports = convertToObject;
