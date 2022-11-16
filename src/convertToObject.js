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
  const properties = sourceString.split(';');

  for (const prop of properties) {
    if (prop.includes('\n')) {
      prop.replace('\n', '');
    }
  }

  return properties
    .filter((prop) => prop.includes(':'))
    .reduce((accum, item) => {
      const splitedProp = item.split(':');

      const key = splitedProp[0].trim();
      const value = splitedProp[1].trim();

      return {
        ...accum,
        [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
