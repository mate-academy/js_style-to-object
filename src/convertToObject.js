'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, line) => {
    let trimLine = line.trim();

    if (!trimLine) {
      return acc;
    }

    trimLine = trimLine.replace(/;$/, '').trim();

    const index = trimLine.indexOf(':');

    const key = trimLine.slice(0, index).trim();
    const value = trimLine.slice(index + 1).trim();

    if (key) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
