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

  return properties.reduce((prev, currentValue) => {
    const property = currentValue.split(':');

    prev[property[0].trim()] = property[1].trim();

    return { ...prev };
  }, {});
}

module.exports = convertToObject;
