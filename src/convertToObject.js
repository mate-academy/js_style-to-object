'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arr = sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el.length > 0);

  arr.forEach(element => {
    const key = element.split(':')[0].trim();
    const value = element.split(':')[1].trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
