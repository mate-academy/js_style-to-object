'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.trim().split('\n')
    .map(item =>
      item.replace(';', '').trim()).filter(item => item !== '');
  const obj = {};

  for (const line of lines) {
    const [property, value] = line.split(':');

    obj[property.trim()] = value.trim();
  }

  return obj;
}

module.exports = convertToObject;
