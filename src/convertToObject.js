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
  const cleanedEntries = sourceString
    .replace(/\s\s+/g, '')
    .replace('\n', '')
    .split(';')
    .filter(Boolean)
    .slice(0, -1);

  cleanedEntries.forEach(el => {
    result[el.split(':')[0].trim()] = el.split(':')[1].trim();
  });

  return result;
}

module.exports = convertToObject;
