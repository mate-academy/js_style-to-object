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

  const stylesObject = sourceString.split(';');

  const result = stylesObject
    .map((value) => value.trim())
    .filter((value) => value.length)
    .filter(value => value.includes(':'))
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
