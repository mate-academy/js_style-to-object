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
  const obj = {};
  const options = sourceString.split(';')
    .map(option => option.trim())
    .filter(option => option !== '');

  options.forEach(option => {
    const keyValue = option.split(':');
    const key = keyValue[0].trim();
    const value = keyValue[1].trim();

    obj[`${key}`] = value;
  });

  return obj;
}

module.exports = convertToObject;
