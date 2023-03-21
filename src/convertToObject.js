'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an objectWithStyles where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStrings = sourceString.split(';');
  const objectWithStyles = {};

  for (const el of arrayOfStrings) {
    const currentKey = el
      .slice(0, el.indexOf(':'))
      .trim()
      .replace(/_/g, '-');
    const currentValue = el
      .slice(el.indexOf(':') + 1)
      .trim();

    if (currentValue !== '' && currentValue !== null) {
      objectWithStyles[currentKey] = currentValue;
    }
  }

  return objectWithStyles;
}

module.exports = convertToObject;
