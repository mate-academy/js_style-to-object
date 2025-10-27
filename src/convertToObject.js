'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const list = sourceString.split(';');
  const result = {};
  let name = '';
  let value = '';

  for (let i of list) {
    if (i.includes(':')) {
      i = i.split(':');
      name = i[0].trim();
      value = i[1].trim();
      result[name] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
