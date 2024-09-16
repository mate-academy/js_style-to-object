'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const filteredArr = sourceString
    .replace(/[\s]+/g, ' ')
    .split(';')
    .filter(item => item !== ' ');

  filteredArr.forEach(item => {
    const temp = item.split(':');
    result[temp[0].trim()] = temp[1].trim();
  });

  return result;
}

module.exports = convertToObject;
