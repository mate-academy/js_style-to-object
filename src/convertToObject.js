'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertedObject = {};

  sourceString
    .split(';')
    .filter((line) => line.length > 0 && line.includes(':'))
    .forEach((line) => {
      let [attribute, value] = line.split(':');

      attribute = attribute.trim();
      value = value.trim();

      convertedObject[attribute] = value;
    });

  return convertedObject;
}

module.exports = convertToObject;
