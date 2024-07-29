'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const StyleObj = {};
  const parts = sourceString.split(';');

  parts.forEach((str) => {
    const cleanStr = str.trim();
    const colonIndex = cleanStr.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = cleanStr.slice(0, colonIndex).trim();
    const value = cleanStr.slice(colonIndex + 1).trim();

    if (property && value) {
      StyleObj[property] = value;
    }
  });

  return StyleObj;
}

module.exports = convertToObject;
