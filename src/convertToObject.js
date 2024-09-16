'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const Arr = sourceString.split(';');
  Arr.pop();
  const obj = {};
  Arr.forEach((arr) => {
    const prop = arr.split(':');
    obj[prop[0].trim()] = prop[1].trim();
  });
  return obj;
}

module.exports = convertToObject;
