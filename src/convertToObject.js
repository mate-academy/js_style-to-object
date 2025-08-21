'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let arr = sourceString
    .split(';')
    .map(sla => sla.trim())
    .filter(sla => sla.length > 0);

  let suporte = {};

  for (let i = 0; i < arr.length; i++) {
    let [key, value] = arr[i].split(':');
    if (key && value) {
      let prop = key.trim();
      let val = value.trim();
      suporte[prop] = val;
    }
  }

  return suporte;
}

module.exports = convertToObject;

