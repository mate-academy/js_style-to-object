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
  const cssItems = sourceString
    .split(';')
    .filter(removedBlankLines => removedBlankLines.includes(':'))
    .map(item => item.split(':'));

  return cssItems.reduce((value, entries) => {
    const trimmedProperty = entries[0].trim();
    const trimmedClass = entries[1].trim();

    return {
      ...value,
      [trimmedProperty]: trimmedClass,
    };
  }, 0);
}

module.exports = convertToObject;
