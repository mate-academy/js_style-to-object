'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propsDividedToStrings = sourceString.split(';');
  const correctCssRules = propsDividedToStrings.reduce(
    (accum, propertyPair) => {
      if (propertyPair.includes(':')) {
        const propAndValue = propertyPair
          .split(':')
          .map((proper) => proper.trim());

        accum[propAndValue[0]] = propAndValue[1];
      }

      return accum;
    },
    {},
  );

  return correctCssRules;
}

module.exports = convertToObject;
