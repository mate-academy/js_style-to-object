'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const propsDividedToStrings = sourceString.split(';');

  const correctCssRules = propsDividedToStrings
    .reduce((accum, propertyPair) => {
      if (propertyPair.includes(':')) {
        const propAndValue = propertyPair.split(':')
          .map((proper) =>
            proper.trim());

        accum[propAndValue[0]] = propAndValue[1];
      }

      return accum;
    }, {});

  return correctCssRules;
}

module.exports = convertToObject;
