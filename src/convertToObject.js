'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let pairs = sourceString
  .split(';')
  .filter(a => a.trim().length > 0);

  return pairs.reduce((acc, item) => {
    let parts = item.split(':');

    if (parts.length >= 0) {
      let key = parts[0].trim();
      let value = parts.slice(1).join(':').trim();
      acc[key] = value;
    }
    return acc;
  },{})
}

module.exports = convertToObject;
