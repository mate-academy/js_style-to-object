'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
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
