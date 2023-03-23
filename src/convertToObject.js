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

  return arrayOfStrings.reduce((objectWithStyles, item) => {
    const currentKey = item
      .slice(0, item.indexOf(':'))
      .trim()
      .replace(/_/g, '-');
    const currentValue = item
      .slice(item.indexOf(':') + 1)
      .trim();

    return (currentValue !== '' && currentValue !== null)
      ? {
        ...objectWithStyles, [currentKey]: currentValue,
      }
      : objectWithStyles;
  }, {});
}

module.exports = convertToObject;
