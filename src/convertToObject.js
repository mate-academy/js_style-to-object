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

  return sourceString
    .split(';')
    .map(s => s.trim())
    .filter(Boolean)
    .reduce((acc, segment) => {
      const idx = segment.indexOf(':');

      if(idx === - 1) {
        return acc;
      }

      const key = segment.slice(0, idx).trim();
 
      if(!key) return acc;

      const rawVal = segment.slice(idx+1).trim();
      acc[key] = rawVal;

      return acc;
    }, {})
}

module.exports = convertToObject;
