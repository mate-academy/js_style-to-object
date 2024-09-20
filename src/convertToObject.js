'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};

  const strings = sourceString.split(';').filter(Boolean);

  strings.forEach((string) => {
    const [styleName, ...definitions] = string.split(':');

    if (styleName && definitions.length > 0) {
      const key = styleName.trim();
      const value = definitions.join(':').trim();

      if (key && value) {
        obj[key] = value;
      }
    }
  });

  return obj;
}

module.exports = convertToObject;
