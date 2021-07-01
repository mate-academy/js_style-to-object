'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = sourceString.split(';').map((item) => item.split(':'))
    .filter((elem) => elem.length === 2);

  return sourceObject.reduce((properties, values) => {
    properties[values[0].trim()] = values[1].trim();

    return properties;
  }, {});
}

module.exports = convertToObject;
