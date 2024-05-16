'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const splittedSource = sourceString.split(';');

  for (let i = 0; i < splittedSource.length; i++) {
    const rule = splittedSource[i].trim();

    if (rule) {
      const [key, value] = rule.split(':').map((part) => part.trim());

      if (key && value !== undefined) {
        result[key] = value;
      }
    }
  }

  return result;
}

module.exports = convertToObject;
