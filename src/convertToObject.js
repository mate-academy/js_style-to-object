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

  let parts = '';
  let result = {};

  pairs.reduce((prev, item, index, items) => {
    parts = item.split(':');

    if (parts.length >= 2) {
      let key = parts[0].trim();
      let value = parts.slice(1).join(':').trim();
      result[key] = value;
    }
  },{})

   return result;

}

module.exports = convertToObject;
