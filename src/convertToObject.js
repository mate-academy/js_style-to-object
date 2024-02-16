'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const ourTarget = {};
  let stringForWorkWith = '';

  for (let i = 0; i < sourceString.length; i++) {
    if (sourceString[i] !== '\n') {
      stringForWorkWith += sourceString[i];
    }
  }

  const arraySelectorsSplit = stringForWorkWith.split(';');
  const arraySelectors
  = arraySelectorsSplit.map(selector => selector.split(':'));

  arraySelectors.map((selector) => {
    if (selector.length > 1) {
      const a = selector[0].trim();
      const b = selector[1].trim();

      ourTarget[a] = b;
    }
  });

  return ourTarget;
}

module.exports = convertToObject;
