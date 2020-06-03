/* eslint-disable no-console */
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
  // write your code here
  const object = {};

  sourceString.split(/;\s+/)
    .filter(str => str.includes(':'))
    .forEach(string => {
      let goodString = '';

      goodString = string.trim();
      goodString = goodString.replace(/\s*;/, '');
      goodString = goodString.replace(/\s*:\s+/, ':');

      const prop = goodString.match(/(.*):/)[1];
      const value = goodString.match(/:(.*)/)[1];

      object[prop] = value;

      return goodString;
    });

  return object;
}

module.exports = convertToObject;
