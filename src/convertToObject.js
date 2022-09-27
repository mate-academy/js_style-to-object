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
  const styleObject
     = {};
  const cleanedEntries = sourceString
    .replace(/\s\s+/g, '')
    .replace('\n', '')
    .split(';')
    .filter(Boolean)
    .slice(0, -1);

  cleanedEntries.forEach(el => {
    styleObject[el.split(':')[0].trim()] = el.split(':')[1].trim();
  });

  return styleObject;
}

module.exports = convertToObject;
