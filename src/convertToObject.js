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

  const substring = sourceString.trim().split(';');

  const cleaned = substring.map((part) => part.trim()).filter((p) => p.length);

  const styleObject = cleaned.reduce((acc, dec) => {
    const index = dec.indexOf(':');
    const key = dec.slice(0, index).trim();
    const value = dec.slice(index + 1).trim();

    return { ...acc, [key]: value };
  }, {});

  return styleObject;
}
module.exports = convertToObject;
