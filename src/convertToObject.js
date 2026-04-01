'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string !== '')
    .reduce((res, string) => {
      const [prop, ...valParts] = string.split(':');
      const key = prop && prop.trim();
      const value = valParts.join(':').trim();

      if (key) {
        res[key] = value;
      }

      return res;
    }, {});

  return result;
}

module.exports = convertToObject;
