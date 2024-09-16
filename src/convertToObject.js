'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objOfProp = {};
  const strOfProp = sourceString.trim().split('\n');

  for (let i = 0; i < strOfProp.length; i++) {
    const pairsOfProp = strOfProp[i].trim().split(':');
    objOfProp[pairsOfProp[0]] = pairsOfProp[1].replace(/;/i, '').trim();
  }
  return objOfProp;
}

module.exports = convertToObject;
