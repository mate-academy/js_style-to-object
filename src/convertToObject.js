'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const styleObject = {};

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed === '\n') {
      return;
    }

    const idx = trimmed.indexOf(':');

    if (idx === 0) {
      return;
    }

    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();

    if (value.endsWith(';')) {
      value = value.slice(0, -1).trim();
    }

    if (key) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
