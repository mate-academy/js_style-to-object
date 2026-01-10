'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const arrayOfRules = sourceString.split(';');

  const result = arrayOfRules
    .map((value) => value.trim())
    .filter((value) => value.length)
    .reduce((previous, value) => {
      const [cssProperty, cssValue] = value.split(':');

      return {
        ...previous,
        [cssProperty.trim()]: cssValue.trim(),
      };
    }, {});

  return result;
}

module.exports = convertToObject;
