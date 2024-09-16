'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');

  const result = {};

  rules.forEach((rule) => {
    const ruleCopy = rule.trim();

    if (ruleCopy !== '') {
      const [key, value] = ruleCopy.split(':').map((item) => item.trim());

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
