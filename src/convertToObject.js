'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString
    .split(';')
    .map((row) => row.trim())
    .filter((a) => a)
    .map((a) => a.split(':').map((b) => b.trim()))
    .reduce((acum, [key, value]) => {
      acum[key] = value;

      return acum;
    }, {});

  return properties;
}

module.exports = convertToObject;
