'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleaned = sourceString.replace(/\t/g, ' ').trim();

  const lines = cleaned
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length && line.includes(':'));

  const pairs = lines
    .map((line) => {
      const idx = line.indexOf(':');
      const prop = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim();

      /* if (val.endsWith(';')) {
       val = val.slice(0, -1).trim();
      }

     if (!val || val === ';') {
      return null;
     } */

      return [prop, val];
    })
    .filter(Boolean);

  const styleObject = pairs.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
