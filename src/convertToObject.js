'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((singleLine) => singleLine.trim())
    .filter(
      (singleLine) => singleLine.length > 0 && singleLine.indexOf(':') > 0,
    )
    .map((singleLine) => {
      const colonIndex = singleLine.indexOf(':');
      const key = singleLine.slice(0, colonIndex).trim();
      const value = singleLine
        .slice(colonIndex + 1)
        .trim()
        .replace(/^:|:$/g, '')
        .trim();

      return value ? { [key]: value } : null;
    })
    .filter(Boolean)
    .reduce((acc, item) => Object.assign(acc, item), {});
}

module.exports = convertToObject;
