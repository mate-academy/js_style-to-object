'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .forEach((rule) => {
      const [key, value] = rule.split(':').map((part) => part.trim());

      if (key && value) {
        stylesObject[key] = value;
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
