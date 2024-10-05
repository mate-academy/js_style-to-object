'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  let cleanedString = '';
  let insideValue = false;

  for (let i = 0; i < sourceString.length; i++) {
    const char = sourceString[i];

    if (insideValue) {
      cleanedString += char;

      if (char === ';') {
        insideValue = false;
      }
    } else {
      if (char === '\n' || char === '\t') {
        continue;
      } else if (char === ':') {
        insideValue = true;
      }

      cleanedString += char;
    }
  }

  const rules = cleanedString.split(';');

  rules.forEach((rule) => {
    const splitIndex = rule.indexOf(':');

    if (splitIndex !== -1) {
      const property = rule.slice(0, splitIndex).trim();
      const value = rule.slice(splitIndex + 1).trim();

      if (property && value) {
        result[property] = value;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
