'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const items = sourceString.split(';').filter(Boolean);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (!item.includes(':')) {
      continue;
    }

    const parts = item.split(':');

    const key = parts[0].split(/\s+/).filter(Boolean).join('');
    const value = parts[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
