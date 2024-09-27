'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const unsortedProperties = sourceString
    .split(';')
    .map(word => word.split(':'))
    .filter(word => word.length > 1);
  const styles = {};

  unsortedProperties.forEach(property => {
    styles[property[0].trim()] = property[1].trim();
  });

  return styles;
}

module.exports = convertToObject;
