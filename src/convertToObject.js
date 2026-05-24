'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultsCSSObject = {};

  const splitData = sourceString.split(';');
  const filteredData = splitData.filter((el) => {
    return el.trim() && el.includes(':');
  });

  filteredData.forEach((el) => {
    const idx = el.indexOf(':');
    const key = el.slice(0, idx).trim();

    resultsCSSObject[key] = el.slice(idx + 1).trim();
  });

  return resultsCSSObject;
}

module.exports = convertToObject;
