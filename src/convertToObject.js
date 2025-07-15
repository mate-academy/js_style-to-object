'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArr = sourceString
    .trim()
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const styleObj = styleArr.reduce((prev, property) => {
    const parts = property.split(':');

    if (parts.length < 2) {
      return prev;
    }

    const key = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    prev[key] = value;

    return prev;
  }, {});

  return styleObj;
}

module.exports = convertToObject;
