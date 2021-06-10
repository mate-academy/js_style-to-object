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
  const res = {};
  let styles = sourceString.split(';');

  styles = styles.map(str => str.split(':'));

  for (let i = 0; i < styles.length; i++) {
    if (typeof styles[i][1] === 'string') {
      res[styles[i][0].trim()] = styles[i][1].trim();
    }
  }

  return res;
}

module.exports = convertToObject;
