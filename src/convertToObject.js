'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const cssString = sourceString.replace(/;\s*;/g, '').trim().split(';');

  cssString.pop();

  for (const row of cssString) {
    let [key, value] = row.split(':');

    key = key.trim();
    value = value.replace(/[\r\n\t]/gm, '').trim();

    cssObject[key] = value;
  }

  return cssObject;
}

module.exports = convertToObject;
