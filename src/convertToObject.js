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

  properties.forEach((element) => {
    const property = element.split(':');

    if (property[0]) {
      newObj[property[0].trim()] = property[1].trim();
    }
  });

  return newObj;
}

module.exports = convertToObject;
