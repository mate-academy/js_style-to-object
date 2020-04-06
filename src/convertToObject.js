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
  const keys = sourceString.match(/(-\w+)?-?\w+-?\w+\s*?:/g);
  const values = sourceString.match(/:.+;/g);
  const res = {};

  const keys1 = keys.map(item => item.replace(/:/g, '').trim());
  const values1 = values.map(item => item.replace(/(:\s+)|;/g, '').trim());

  for (let i = 0; i < keys.length; i++) {
    res[keys1[i]] = values1[i];
  }

  return res;
}

module.exports = convertToObject;
