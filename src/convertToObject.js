'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styledRows = sourceString
    .split(';')
    .map(row => row.trim())
    .filter(row => row.length > 0)
    .map(pair => {
      const [property, value] = pair.split(':')
        .map(word => word.trim());

      return { [property]: value };
    });

  return Object.assign({}, ...styledRows);
}

module.exports = convertToObject;
