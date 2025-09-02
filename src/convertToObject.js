'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((rule) => rule.trim())
      .filter(Boolean)
      .map((rule) => {
        const [prop, ...rest] = rule.split(':');

        if (!rest.length) {
          return null;
        }

        const value = rest.join(':').trim();

        return [prop.trim(), value];
      })
      .filter(Boolean),
  );
}

module.exports = convertToObject;
