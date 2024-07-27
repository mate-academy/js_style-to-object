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

  sourceString.split('\n').forEach((s) => {
    const str = s.trim();

    if (str === '') {
      return;
    }

    const colonIndex = str.indexOf(':');

    const property = str.slice(0, colonIndex).trim();
    const value = str.slice(colonIndex + 1).trim();

    if (property && value) {
      obj[property] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;

module.exports = convertToObject;
