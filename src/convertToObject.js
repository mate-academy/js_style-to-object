'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleaned = sourceString.replace(/[\t]/g, ' ');
  const trimmedArray = cleaned
    .split(';')
    .map((decl) => decl.trim())
    .filter(Boolean);
  const nonEmptyLines = trimmedArray.filter((line) => line.length > 0);

  const result = {};

  nonEmptyLines.forEach((line) => {
    const index = line.indexOf(':');
    const key = line.slice(0, index).trim();
    const value = line
      .slice(index + 1)
      .replace(/;$/, '')
      .trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
