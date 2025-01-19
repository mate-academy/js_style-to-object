'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (sourceString) => {
  const rules = sourceString.replace(/;+/g, ';');

  const result = rules.split(';');

  return result.reduce((prev, rule) => {
    const [key, value] = rule.split(':');

    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      return {
        ...prev,
        [trimmedKey]: trimmedValue,
      };
    }

    return prev;
  }, {});
};

module.exports = convertToObject;
