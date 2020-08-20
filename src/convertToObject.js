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
  const out = {};
  const strMod = sourceString
    .split(';')
    .join().split(':')
    .join().split(',')
    .map(value => value.trim());

  const strFiltered = strMod.filter(value => value.length > 0);

  for (let i = 0; i < strFiltered.length; i += 2) {
    out[strFiltered[i]] = strFiltered[i + 1];
  };

  return out;
}

module.exports = convertToObject;
