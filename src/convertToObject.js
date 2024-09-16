'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arr = sourceString.split(';');

  arr.forEach(elem => {
    const prop = elem.split(':');

    if (prop[1]) {
      result[prop[0].trim()] = prop[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
