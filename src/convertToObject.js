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
  return sourceString
    .split(';')
    .filter(removedBlankLines => removedBlankLines.includes(':'))
    .map(item => item.split(':'))
    .reduce(getObject, 0);
}

const getObject = (value, entries) => {
  return {
    ...value,
    [entries[0].trim()]: entries[1].trim(),
  };
};

module.exports = convertToObject;
