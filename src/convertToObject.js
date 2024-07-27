'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
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
      obj[property] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;

module.exports = convertToObject;
