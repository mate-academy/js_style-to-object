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
    .map(item => item.split(': '));

  const reducer = stylesAndProp
    .filter(item => item.length > 1)
    .reduce((acc, item) => {
      const key = item[0].replace('\n', '').trim();
      const values = item
        .splice(1).map((value) => value.replace('\n', '').trim());

      return ({
        ...acc,
        [key]: values.join(''),
      });
    }, {});

  return reducer;
}

module.exports = convertToObject;
