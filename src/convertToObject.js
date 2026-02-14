'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString.split(';');
  const line = parts.map((item) => item.trim()).filter((item) => item);
  const pairs = line.map((r) => r.split(':'));
  const parsedData = {};

  pairs.forEach((pair) => {
    const key = pair[0].trim();
    const value = pair[1].trim();

    parsedData[key] = value;
  });

  return parsedData;
}

module.exports = convertToObject;
