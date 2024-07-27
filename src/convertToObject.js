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
    let value = str.slice(colonIndex + 1).trim();

    if (value.endsWith(';')) {
      value = value.slice(0, -1).trim();
    }
  });

  return obj;
}

module.exports = convertToObject;

module.exports = convertToObject;
