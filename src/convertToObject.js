'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const obj = {};

  arr.map(function(item) {
    const prop = item.split(':');

    if (prop[0].match(/-|[a-z]/)) {
      obj[prop[0].trim()] = prop[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
