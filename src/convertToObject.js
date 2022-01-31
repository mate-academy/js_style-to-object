'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styleRow;
  const objCSSvalues = {};

  sourceString.split(';').forEach(row => {
    styleRow = row.split(':').map(word => word.trim());

    const [ cssProperty, value ] = styleRow;

    if (cssProperty && value) {
      objCSSvalues[cssProperty] = value;
    }
  });

  return (objCSSvalues);
}

module.exports = convertToObject;
