'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split(';');
  const styledObject = splittedString
    .map(word => word.split(':'))
    .reduce((obj, item) => {
      if (item.length === 2) {
        const [key, value] = item;

        obj[key.trim()] = value.trim();
      }

      return obj;
    }, {});

  return styledObject;
}

module.exports = convertToObject;
