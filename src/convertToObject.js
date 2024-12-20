'use strict';

const SEMICOLON = ';';
const FIRST_INDEX = 0;
const SECOND_INDEX = 1;
const COLON = ':';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(SEMICOLON)
    .map((line) => line.trim())
    .filter((line) => line && line.includes(COLON))
    .map((line) => line.split(COLON))
    .reduce((prev, word) => {
      const key = word[FIRST_INDEX].trim();
      let value = word[SECOND_INDEX].trim();

      value = value.endsWith(';') ? value.slice(FIRST_INDEX, -1).trim() : value;

      return { ...prev, [key]: value };
    }, {});
}

module.exports = convertToObject;
