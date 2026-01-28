'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  let parts;

  if (sourceString.includes(';')) {
    parts = sourceString.trim().split(';');
  } else {
    parts = [sourceString.trim()];

    const result1 = parts.reduce((acc, dec) => {
      const index = dec.indexOf(':');
      const key = dec.slice(0, index).trim();
      const value = dec.slice(index + 1).trim();

      return { ...acc, [key]: value };
    }, {});

    return result1;
  }

  const cleaned = parts.map((part) => part.trim()).filter((p) => p.length);

  const result2 = cleaned.reduce((acc, dec) => {
    const index = dec.indexOf(':');
    const key = dec.slice(0, index).trim();
    const value = dec.slice(index + 1).trim();

    return { ...acc, [key]: value };
  }, {});

  return result2;
}
module.exports = convertToObject;
