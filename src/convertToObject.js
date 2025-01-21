'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line && line.includes(':'));

  const entries = lines.map((line) => {
    const [key, value] = line.split(':');

    return [
      key.trim().replace(/"/g, ''),
      value.trim().replace(/;/g, '').trim(),
    ];
  });

  return entries.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});
}

module.exports = convertToObject;
