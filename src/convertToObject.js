'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  const obj = {};

  stylesString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .forEach((rule) => {
      const [key, ...rest] = rule.split(':');

      if (!key || rest.length === 0) {
        return;
      }

      const value = rest.join(':').trim();

      obj[key.trim()] = value;
    });

  return obj;
}

module.exports = convertToObject;
