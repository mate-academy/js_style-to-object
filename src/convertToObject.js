'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((cssRule) => cssRule.trim())
    .reduce((resultObj, cssRule) => {
      const [key, value] = cssRule.split(':').map((part) => part.trim());

      if (key && value) {
        resultObj[key] = value;
      }

      return resultObj;
    }, {});
}

module.exports = convertToObject;
