'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map((stroke) => stroke.trim())
    .filter(Boolean)
    .reduce((cssObj, cssRule) => {
      const [key, ...value] = cssRule.split(':')
      cssObj[key.trim()] = value.join(':').trim()
      return cssObj;
    }, {});
}


module.exports = convertToObject;
