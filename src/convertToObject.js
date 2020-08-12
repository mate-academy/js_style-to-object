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
  const s = sourceString
    .split(';')
    .map(e => e.split(':').map(x => x.trim()))
    .filter(z => z[1]);

  return Object.fromEntries(s);
}

module.exports = convertToObject;
