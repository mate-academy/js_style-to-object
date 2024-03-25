'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';');
  let aux;
  let ky;
  let vl;
  const obj = {};

  for (const i of arr) {
    aux = i.split(':');
    ky = aux[0];
    vl = aux[1];

    if (ky && vl) {
      obj[ky.trim()] = vl.trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
