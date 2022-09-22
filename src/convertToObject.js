'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const properties = sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element !== '');

  const newObj = {};

  properties.reduce((prev, currentValue) => {
    const property = currentValue.split(':');

    newObj[property[0].trim()] = property[1].trim();

    return currentValue;
  }, 0);

  return newObj;
}

module.exports = convertToObject;
