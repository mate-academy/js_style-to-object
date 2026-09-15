'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const entries = sourceString
    .split(';')
    .map((declaration) => {
      const [property, ...valueParts] = declaration.split(':');

      return [property.trim(), valueParts.join(':').trim()];
    })
    .filter(([property, value]) => property && value);

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
