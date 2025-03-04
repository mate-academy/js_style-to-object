'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const entries = [];

  if (!sourceString) {
    return {};
  }

  sourceString
    .replaceAll(/[^a-zA-Z!:#\d-./,%(#)][\t\r\b\v\f]/g, '')
    .trim()
    .split(';')
    .forEach((style) => {
      if (style.trim()) {
        const separator = style.charAt(style.indexOf(':'));

        entries.push([...style.split(separator).map((x) => x.trim())]);
      }
    });

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
