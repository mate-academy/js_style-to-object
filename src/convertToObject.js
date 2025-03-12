'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const styleEntries = styleString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  return Object.fromEntries(
    styleEntries.map((rule) => {
      const [key, value] = rule.split(':').map((part) => part.trim());

      return [key, value];
    }),
  );
}

module.exports = convertToObject;
