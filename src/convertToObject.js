'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleObject = sourceString.split(';').reduce((acc, decl) => {
    const trim = decl.trim();

    if (!trim) {
      return acc;
    }

    const parts = trim.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    acc[key] = value;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
