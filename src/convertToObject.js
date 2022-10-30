'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 *
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleStorageObj = {};
  const stylePropWithValues = sourceString.split('\n');
  const stylePropWithValuesTrimmed = stylePropWithValues
    .map(string => string
      .slice(0, -1)
      .split(':')
      .map(
        entries => entries.trim()))
    .filter(element => element.length > 1);

  stylePropWithValuesTrimmed.forEach(item => {
    styleStorageObj[item[0]] = item[1];
  });

  return styleStorageObj;
}

module.exports = convertToObject;
