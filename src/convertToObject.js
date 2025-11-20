'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.split(';').map((line) => line.trim());
  const result = {};

  for (const style of stylesList) {
    const separatedLine = style.split(':');

    if (separatedLine.length === 2) {
      const [prop, value] = separatedLine;

      result[prop.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
