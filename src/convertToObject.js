'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const styleEntries = sourceString
    .split(';')
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);

  styleEntries.forEach((entry) => {
    const [rawKey, ...rawValueParts] = entry.split(':');

    if (rawKey && rawValueParts.length > 0) {
      const key = rawKey.trim();
      const value = rawValueParts.join(':').trim();

      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
