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
  const stylesAndProp = sourceString
    .split(';')
    .map(item => item.split(':'));

  const reducer = stylesAndProp
    .filter(item => item.length > 1)
    .reduce((acc, [key, value]) => {
      const keys = key.replace('\n', '').trim();
      const values = value.replace('\n', '').trim();

      return ({
        ...acc,
        [keys]: values,
      });
    }, {});

  return reducer;
}

module.exports = convertToObject;
