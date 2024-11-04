'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const str = sourceString;
  const result = {};
  const items = str.split(';').filter((item) => item.trim());

  items.forEach((item) => {
    const parts = item.split(':');
    const key = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
