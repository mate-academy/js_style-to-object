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
  const obj = {};
  const spl = sourceString.split(';');
  const mp = spl.map(a => a.split(`:`));
  const tirm = mp.map(a => a.map(b => b.trim()));

  for (let i = 0; i < tirm.length; i++) {
    if (tirm[i][1] === undefined) {
      i++;
    } else {
      obj[tirm[i][0]] = tirm[i][1];
    }
  }

  return obj;
}

module.exports = convertToObject;
