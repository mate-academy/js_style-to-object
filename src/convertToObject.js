'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};
  const properties = sourceString
    .split(';')
    .map(value => value.split(':'))
    .filter(value => value.length > 1);

  properties.forEach(value => {
    newObject[value[0].trim()] = value[1].trim();
  });

  return newObject;
}

module.exports = convertToObject;
