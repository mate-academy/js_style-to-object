'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(segment => segment.trim())
    .filter(Boolean)
    .filter(segment => segment.includes(':'))
    .map(segment => {
      const colonIndex = segment.indexOf(':');
      const prop = segment.slice(0, colonIndex).trim();
      const value = segment.slice(colonIndex + 1).trim();
      return [prop, value];
    })
    .reduce((stylesObject, [prop, value]) => {
      stylesObject[prop] = value;
      return stylesObject;
    }, {});
}

module.exports = convertToObject;
